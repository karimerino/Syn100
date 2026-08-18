/* =========================================================
THE HIDDEN CLIMATE COST OF CATTLE
MAIN JAVASCRIPT
========================================================= */


/* =========================================================
PAGE LOADING
========================================================= */

window.addEventListener("load", () => {

    setTimeout(() => {

        const loadingScreen =
            document.getElementById("loadingScreen");

        if (loadingScreen) {

            loadingScreen.classList.add("loaded");

        }

    }, 1000);

});


/* =========================================================
SECTION INFORMATION
========================================================= */

const sections = {

    climate: {

        number: "02",

        title:
            "Methane is a climate problem.",

        description:
            "Cattle agriculture connects land, water, atmospheric emissions, and climate change. Methane produced during digestion is one part of a much larger climate system."

    },


    mapping: {

        number: "04",

        title:
            "Mapping methane across space.",

        description:
            "GIS allows us to examine where cattle agriculture is concentrated and how those locations overlap with land use, agricultural regions, environmental conditions, methane emissions, and communities."

    },


    crispr: {

        number: "05",

        title:
            "Microbial intervention.",

        description:
            "Researchers are investigating whether microbial communities in the rumen could eventually be altered using genetic tools such as CRISPR. The goal is to understand whether changing specific microbes or their metabolic pathways could reduce methane production."

    },


    justice: {

        number: "06",

        title:
            "Climate solutions must consider people.",

        description:
            "The effects of climate change and access to climate solutions are not distributed equally. Cattle agriculture involves farmers, agricultural workers, consumers, companies, and communities with different resources, risks, and levels of influence."

    },


    future: {

        number: "07",

        title:
            "Thinking beyond the present.",

        description:
            "Climate decisions can affect people far into the future. Future climate solutions must consider their long term effects on agriculture, communities, biological systems, and the people who depend on them."

    }

};


/* =========================================================
GET ELEMENTS
========================================================= */

const navItems =
    document.querySelectorAll(".nav-item");


const infoPanel =
    document.getElementById("infoPanel");


const overviewPanel =
    document.getElementById("overviewPanel");


const biologyPanel =
    document.getElementById("biologyPanel");


const closePanel =
    document.getElementById("closePanel");


const closeOverview =
    document.getElementById("closeOverview");


const closeBiology =
    document.getElementById("closeBiology");


const backToMain =
    document.getElementById("backToMain");


const panelNumber =
    document.querySelector(".panel-number");


const panelTitle =
    document.getElementById("panelTitle");


const panelDescription =
    document.getElementById("panelDescription");


/* =========================================================
CLOSE ALL PANELS
========================================================= */

function closeAllPanels() {

    if (infoPanel) {

        infoPanel.classList.remove("open");

        infoPanel.setAttribute(
            "aria-hidden",
            "true"
        );

    }


    if (overviewPanel) {

        overviewPanel.classList.remove("open");

        overviewPanel.setAttribute(
            "aria-hidden",
            "true"
        );

    }


    if (biologyPanel) {

        biologyPanel.classList.remove("open");

        biologyPanel.setAttribute(
            "aria-hidden",
            "true"
        );

    }

}


/* =========================================================
OPEN SECTION
========================================================= */

function openSection(sectionName) {

    closeAllPanels();


    /* =====================================================
       OVERVIEW
       ===================================================== */

    if (sectionName === "overview") {

        if (overviewPanel) {

            overviewPanel.classList.add("open");

            overviewPanel.setAttribute(
                "aria-hidden",
                "false"
            );

            overviewPanel.scrollTop = 0;

        }

        return;

    }


    /* =====================================================
       BIOLOGY
       Biology remains its own full story panel.
       ===================================================== */

    if (sectionName === "biology") {

        if (biologyPanel) {

            biologyPanel.classList.add("open");

            biologyPanel.setAttribute(
                "aria-hidden",
                "false"
            );

            biologyPanel.scrollTop = 0;

            initializeMolstar();

        }

        return;

    }


    /* =====================================================
       STANDARD INFORMATION PANELS
       ===================================================== */

    const section =
        sections[sectionName];


    if (!section) {

        console.error(
            "Section not found:",
            sectionName
        );

        return;

    }


    if (panelNumber) {

        panelNumber.textContent =
            section.number;

    }


    if (panelTitle) {

        panelTitle.textContent =
            section.title;

    }


    if (panelDescription) {

        panelDescription.textContent =
            section.description;

    }


    if (infoPanel) {

        infoPanel.classList.add("open");

        infoPanel.setAttribute(
            "aria-hidden",
            "false"
        );

    }

}


/* =========================================================
NAVIGATION
========================================================= */

navItems.forEach(item => {

    item.addEventListener("click", () => {

        navItems.forEach(nav => {

            nav.classList.remove("active");

        });


        item.classList.add("active");


        const sectionName =
            item.dataset.section;


        openSection(sectionName);

    });

});


/* =========================================================
CLOSE INFORMATION PANEL
========================================================= */

if (closePanel) {

    closePanel.addEventListener("click", () => {

        closeAllPanels();

    });

}


/* =========================================================
CLOSE OVERVIEW PANEL
========================================================= */

if (closeOverview) {

    closeOverview.addEventListener("click", () => {

        closeAllPanels();

    });

}


/* =========================================================
CLOSE BIOLOGY PANEL
========================================================= */

if (closeBiology) {

    closeBiology.addEventListener("click", () => {

        closeAllPanels();

    });

}


/* =========================================================
BACK TO MAIN
========================================================= */

if (backToMain) {

    backToMain.addEventListener("click", () => {

        closeAllPanels();


        const overviewButton =
            document.querySelector(
                '.nav-item[data-section="overview"]'
            );


        if (overviewButton) {

            navItems.forEach(nav => {

                nav.classList.remove("active");

            });


            overviewButton.classList.add("active");

        }

    });

}


/* =========================================================
LEARN MORE MODAL
========================================================= */

const learnMoreButton =
    document.getElementById("learnMoreButton");


const learnMoreModal =
    document.getElementById("learnMoreModal");


const closeModal =
    document.getElementById("closeModal");


if (learnMoreButton && learnMoreModal) {

    learnMoreButton.addEventListener(
        "click",
        () => {

            learnMoreModal.classList.add("open");

        }
    );

}


if (closeModal && learnMoreModal) {

    closeModal.addEventListener(
        "click",
        () => {

            learnMoreModal.classList.remove("open");

        }
    );

}


/* =========================================================
CLOSE MODAL OUTSIDE
========================================================= */

if (learnMoreModal) {

    learnMoreModal.addEventListener(
        "click",
        event => {

            if (
                event.target === learnMoreModal
            ) {

                learnMoreModal.classList.remove(
                    "open"
                );

            }

        }
    );

}


/* =========================================================
ESCAPE KEY
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (event.key !== "Escape") {

            return;

        }


        if (learnMoreModal) {

            learnMoreModal.classList.remove(
                "open"
            );

        }


        closeAllPanels();

    }
);


/* =========================================================
MAIN MAP ZOOM BUTTONS
========================================================= */

const zoomIn =
    document.getElementById("zoomIn");


const zoomOut =
    document.getElementById("zoomOut");


if (zoomIn) {

    zoomIn.addEventListener(
        "click",
        () => {

            console.log(
                "Zoom in clicked."
            );

        }
    );

}


if (zoomOut) {

    zoomOut.addEventListener(
        "click",
        () => {

            console.log(
                "Zoom out clicked."
            );

        }
    );

}


/* =========================================================
MOUSE POSITION
========================================================= */

document.addEventListener(
    "mousemove",
    event => {

        const x =
            (event.clientX /
                window.innerWidth) * 100;


        const y =
            (event.clientY /
                window.innerHeight) * 100;


        document.documentElement.style
            .setProperty(
                "--mouse-x",
                `${x}%`
            );


        document.documentElement.style
            .setProperty(
                "--mouse-y",
                `${y}%`
            );

    }
);


/* =========================================================
CLIMATE PATHWAY ANIMATION
========================================================= */

const climateNodes =
    document.querySelectorAll(
        ".climate-node"
    );


function activateClimateNode(index) {

    climateNodes.forEach(node => {

        node.classList.remove("active");

    });


    if (
        climateNodes[index]
    ) {

        climateNodes[index]
            .classList.add("active");

    }

}


/* Sequentially highlight each stage */

if (climateNodes.length) {

    let currentNode = 0;


    activateClimateNode(
        currentNode
    );


    setInterval(() => {

        currentNode =
            (currentNode + 1)
            % climateNodes.length;


        activateClimateNode(
            currentNode
        );

    }, 1200);

}


/* =========================================================
MOL* VIEWER
========================================================= */

/*
    The molecule viewer is initialized only when the
    Biology section is opened.

    This keeps Mol* from loading on the main page
    and keeps the Biology page responsible for its
    own molecular viewer.
*/

let molstarInitialized = false;

let molstarLoading = false;


/* =========================================================
LOAD MOL* LIBRARY
========================================================= */

function loadMolstarLibrary() {

    return new Promise(
        (resolve, reject) => {

            if (
                window.molstar &&
                window.molstar.Viewer
            ) {

                resolve(
                    window.molstar
                );

                return;

            }


            const existingScript =
                document.querySelector(
                    'script[data-molstar="true"]'
                );


            if (existingScript) {

                existingScript.addEventListener(
                    "load",
                    () => {

                        if (
                            window.molstar &&
                            window.molstar.Viewer
                        ) {

                            resolve(
                                window.molstar
                            );

                        } else {

                            reject(
                                new Error(
                                    "Mol* loaded but Viewer was unavailable."
                                )
                            );

                        }

                    }
                );


                existingScript.addEventListener(
                    "error",
                    () => {

                        reject(
                            new Error(
                                "Mol* library failed to load."
                            )
                        );

                    }
                );


                return;

            }


            const script =
                document.createElement(
                    "script"
                );


            script.src =
                "https://unpkg.com/molstar@latest/build/viewer/molstar.js";


            script.dataset.molstar =
                "true";


            script.onload = () => {

                if (
                    window.molstar &&
                    window.molstar.Viewer
                ) {

                    resolve(
                        window.molstar
                    );

                } else {

                    reject(
                        new Error(
                            "Mol* Viewer was not found."
                        )
                    );

                }

            };


            script.onerror = () => {

                reject(
                    new Error(
                        "Could not load Mol*."
                    )
                );

            };


            document.head.appendChild(
                script
            );

        }
    );

}


/* =========================================================
INITIALIZE MOL*
========================================================= */

async function initializeMolstar() {

    const container =
        document.getElementById(
            "molstarViewer"
        );


    if (!container) {

        return;

    }


    if (molstarInitialized) {

        return;

    }


    if (molstarLoading) {

        return;

    }


    molstarLoading = true;


    const loading =
        container.querySelector(
            ".molstar-loading"
        );


    try {

        const molstar =
            await loadMolstarLibrary();


        /*
            MCR structure:

            PDB 1E6V

            Methane producing enzyme
            from a methanogenic archaeon.

            The structure is used here as a molecular
            visualization of MCR.
        */


        const viewer =
            await molstar.Viewer.create(
                container,
                {

                    layoutIsExpanded: false,

                    layoutShowControls: true,

                    layoutShowRemoteState: false,

                    layoutShowSequence: false,

                    layoutShowLog: false,

                    layoutShowLeftPanel: false,

                    collapseLeftPanel: true,

                    collapseRightPanel: false,

                    viewportShowExpand: false,

                    viewportShowControls: true,

                    pdbProvider: "rcsb"

                }
            );


        await viewer.loadPdb(
            "1E6V"
        );


        molstarInitialized =
            true;


        if (loading) {

            loading.classList.add(
                "hidden"
            );

        }

    }

    catch (error) {

        console.error(
            "Mol* initialization failed:",
            error
        );


        if (loading) {

            loading.innerHTML = `

                <div class="molstar-loading-line"></div>

                <span>
                    MOLECULAR VIEWER UNAVAILABLE
                </span>

                <small>
                    The rest of the Biology section is still available.
                </small>

            `;

        }

    }

    finally {

        molstarLoading = false;

    }

}


/* =========================================================
END
========================================================= */