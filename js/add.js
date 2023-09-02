function generateCertificateHTML(certificate, certificateData) {
    const html = `
        <li>
            <div class="list_inner">
                <span class="number">${certificate}</span>
                <h3 class="title add-cer-title">${certificateData[certificate].title}</h3>
                <p class="text add-cer-from">From ${certificateData[certificate].from}</p>
                <div class="tokyo_tm_read_more">
                    <a href="#"><span>Read More</span></a>
                </div>
                <a class="tokyo_tm_full_link" href="#"></a>
                
                <!-- Service Popup Start -->
                <img class="popup_service_image" src="img/cers/${certificateData[certificate].img}" alt="" />
                <div class="service_hidden_details">
                    <div class="service_popup_informations">
                        <div class="descriptions add-cer-descriptions">
                            <h5 class="add-knowledge-title">The knowledge I have gained from this course:</h5>
                            ${certificateData[certificate].knowledge.map(k => `<p>${k}</p>`).join('')}
                            <p class="add-bold">
                                <a class="add-white" target="_blank" href="${certificateData[certificate].link}">Link to my certificates</a>
                            </p>
                        </div>
                    </div>
                </div>
                <!-- /Service Popup End -->
            </div>
        </li>
    `;
    return html;
}

function addCertificatesToPage(certificateData) {
    const certificateList = document.querySelector(".add-certificate-list");
    for (const certificate in certificateData) {
        if (certificateData.hasOwnProperty(certificate)) {
            const certificateHTML = generateCertificateHTML(certificate, certificateData);
            certificateList.insertAdjacentHTML('beforeend', certificateHTML);
        }
    }
}

fetch('data/certificates.json')
    .then(response => response.json())
    .then(data => {
        addCertificatesToPage(data);
    })
    .catch(error => {
        console.error('Error loading JSON:', error);
    });
