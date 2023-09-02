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
                <a class="tokyo_tm_full_link" href="#" onclick="openServicePopup(this);"></a>
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

// -------------------------

function generateProjectDescriptionHTML(data) {
    const description = data.description;
    let html = '';

    for (let i = 0; i < description.length; i++) {
        const line = description[i];
        if (line.startsWith('Img')) {
            const imgSrc = `${data.src}${line.split(' ')[1]}.png`;
            html += `<img class="add-prj-img" src="${imgSrc}" /> <br><br>`;
        } else if (line.startsWith('<')) {
            const closingTagIndex = line.indexOf('>');
            if (closingTagIndex !== -1) {
                const tagName = line.slice(1, closingTagIndex);
                const tagContent = line.slice(closingTagIndex + 1);
                html += `<${tagName}>${tagContent}</${tagName}>`;
            }
        } else {
            html += `<p>${line}</p>`;
        }
    }
    return `<div class="add-project-description">${html}</div>`;
}

function generateProjectHTML(project, projectData) {
    const html = `
        <li>
            <div class="list_inner" style="overflow: hidden;">
                <div class="image add-thump-img" style="background-image: url(${projectData[project].src}thump.png);">
                    <div class="main" data-img-url="${projectData[project].src}thump.png"></div>
                    <a class="tokyo_tm_full_link" href="#" onclick="openNewsPopup(this);"></a>
                </div>
                <div class="details">
                    <div class="extra">
                        <div class="short">
                            <p class="date">${projectData[project].date}</p>
                        </div>
                    </div>
                    <h2 class="title">
                        <a>${projectData[project].title}</a>
                    </h2>
                    <div class="tokyo_tm_read_more">
                        <a href="#"><span>Read More</span></a>
                    </div>
                </div>
                <div class="main_content">
                    <div class="descriptions">
                        <h5>In this project, I use<br /><br /></h5>
                        <h6>- Languages: ${projectData[project].languages}<br /><br /></h6>
                        <h6>- Libraries/Framework: ${projectData[project].librariesorframework}<br /><br /></h6>
                        <h6>- Tools: ${projectData[project].tools}<br /><br /></h6>
                        <h6>- Knowledge: ${projectData[project].knowledge}<br /><br /></h6>
                        <h6>Sources code: <a class="add-bold add-white"
                            href="${projectData[project].link}"
                            target="_blank">${projectData[project].link}</a></h6>
                        <br />
                        ${generateProjectDescriptionHTML(projectData[project])}
                    </div>
                </div>
            </div>
        </li>
    `
    return html;
}

function addProjectsToPage(projectData) {
    const projectList = document.querySelector(".add-project-list");
    for (const project in projectData) {
        if (projectData.hasOwnProperty(project)) {
            const projectHTML = generateProjectHTML(project, projectData);
            projectList.insertAdjacentHTML('beforeend', projectHTML);
        }
    }
}

fetch('data/projects.json')
    .then(response => response.json())
    .then(data => {
        addProjectsToPage(data)
    })
    .catch(error => {
        console.error('Error loading JSON:', error);
    });