const express = require('express');
const { Connection, PublicKey, Keypair, clusterApiUrl, sendAndConfirmTransaction, Transaction } = require('@solana/web3.js');
const { getOrCreateAssociatedTokenAccount, createTransferInstruction, TOKEN_PROGRAM_ID } = require('@solana/spl-token');

const app = express();

// Parse JSON request body
app.use(express.json());

// sendToken function
const sendToken = async (fromSecretKey, toPublicKey, mintAddress, amount) => {
  try {
    // Create a connection to the devnet cluster
    const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');

    // Create wallet from the sender's secret key
    const fromWallet = Keypair.fromSecretKey(fromSecretKey);

    // Create mint public key
    const mintPublicKey = new PublicKey(mintAddress);

    // Get or create the receiver's token account
    const toTokenAccount = await getOrCreateAssociatedTokenAccount(
      connection,
      fromWallet,
      mintPublicKey,
      new PublicKey(toPublicKey)
    );

    // Get or create the sender's token account
    const fromTokenAccount = await getOrCreateAssociatedTokenAccount(
      connection,
      fromWallet,
      mintPublicKey,
      fromWallet.publicKey
    );

    // Create transfer instruction
    const transferInstruction = createTransferInstruction(
      fromTokenAccount.address,  // sender's token account
      toTokenAccount.address,    // receiver's token account
      fromWallet.publicKey,      // owner
      amount,                    // amount to transfer
      [],
      TOKEN_PROGRAM_ID
    );

    // Create transaction object
    const transaction = new Transaction().add(transferInstruction);

    // Sign and send the transaction
    const signature = await sendAndConfirmTransaction(
      connection,
      transaction,
      [fromWallet] // signers
    );

    return signature;
  } catch (error) {
    console.error('Error during token transfer:', error);
    throw new Error('Failed to send tokens');
  }
};

// Create POST route to call sendToken
app.post('/send-token', async (req, res) => {
  const { fromSecretKey, toPublicKey, mintAddress, amount } = req.body;

  try {
    // Convert fromSecretKey to Uint8Array
    const fromSecretKeyArray = Uint8Array.from(fromSecretKey);

    // Call sendToken function
    const signature = await sendToken(fromSecretKeyArray, toPublicKey, mintAddress, amount);

    // Return successful transaction signature
    res.status(200).json({ success: true, signature });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});