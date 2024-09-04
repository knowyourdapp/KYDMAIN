import React, { useEffect, useState } from 'react';

const FormDataList = () => {
    const [formData, setFormData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/forms')
            .then(response => response.json())
            .then(data => {
                console.log('Fetched form data:', data); // Log the data
                setFormData(data);
            })
            .catch(error => console.error('Error fetching form data:', error));
    }, []);

    return (
        <div className="grid grid-cols-2 gap-4">
            {formData.map((form, index) => (
                <div key={index} className="p-4 border">
                    <h2>{form.name}</h2>
                    <p><strong>Website:</strong> {form.website}</p>
                    <p><strong>Status:</strong> {form.projectStatus}</p>
                    <p><strong>Teaser:</strong> {form.shortTeaser}</p>
                    <p><strong>Founder Doxxed:</strong> {form.isFounderDoxxed}</p>
                    <p><strong>Description:</strong> {form.description}</p>
                    <p><strong>Category Name & Type:</strong> {form.categoryName} ({form.categoryType})</p>
                    <p><strong>Category Description:</strong> {form.categoryDescription}</p>
                    <p><strong>Primary Network:</strong> {form.primaryNetwork}</p>
                    <p><strong>Token Address:</strong> {form.tokenAddress}</p>
                    <p><strong>Token Audited:</strong> {form.isTokenAudited}</p>
                    <p><strong>Coin Listings:</strong> {form.coinListings}</p>
                    <p><strong>Chains:</strong> {form.chains.join(', ')}</p>

                    <div>
                        <strong>Social Links:</strong>
                        <ul>
                            {form.socialLinks && Object.entries(form.socialLinks).map(([key, value]) => (
                                <li key={key}>{key}: {value}</li>
                            ))}
                        </ul>
                    </div>

                
                    <div>
                        <strong>Screenshots:</strong>
                        {Array.isArray(form.screenshots) ? (
                            form.screenshots.map((screenshot, i) => (
                                <img key={i} src={`http://localhost:5000/uploads/${screenshot}`} alt={`Screenshot ${i+1}`} />
                            ))
                        ) : (
                            <img src={`http://localhost:5000/uploads/${form.screenshots}`} alt="Screenshot" />
                        )}
                    </div>

                    <div>
                        <strong>Video:</strong>
                        {Array.isArray(form.video) ? (
                            form.video.map((vid, i) => (
                                <video key={i} width="320" height="140" controls>
                                    <source src={`http://localhost:5000/uploads/${vid}`} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            ))
                        ) : (
                            <video width="300" height="140" controls>
                                <source src={`http://localhost:5000/uploads/${form.video}`} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FormDataList;
