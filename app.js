// Current language (default is Arabic)
let currentLang = 'ar';

// Combine original drugs database with additional drugs
const allDrugsDatabase = { ...drugsDatabase, ...additionalDrugs };

// English translations for the original drugs database
const drugsDatabaseEN = {
    "paracetamol": {
        name: "Paracetamol (Acetaminophen)",
        indications: "Analgesic and antipyretic. Used for headache, muscle pain, arthritis, fever, cold and flu symptoms.",
        dosage: "Adults: 500-1000 mg every 4-6 hours as needed, maximum 4 grams daily. Children: 10-15 mg/kg every 4-6 hours.",
        interactions: "Alcohol, carbamazepine, phenytoin, barbiturates, rifampicin. Increased risk of hepatotoxicity when used with alcohol.",
        sideEffects: "Rare at recommended doses. May include: skin rash, thrombocytopenia, hepatic disorders at high doses.",
        warnings: "Avoid prolonged use or high doses. Use with caution in patients with liver or kidney disease. Avoid using with other medications containing paracetamol.",
        clinicalPearls: "Mechanism of action not fully understood. First-line treatment for mild to moderate pain. Less effect on the gastrointestinal system compared to NSAIDs."
    },
    "amoxicillin": {
        name: "Amoxicillin",
        indications: "Broad-spectrum penicillin antibiotic. Used for respiratory, ear, sinus, urinary tract, and skin infections.",
        dosage: "Adults: 250-500 mg every 8 hours or 500-875 mg every 12 hours. Children: 20-90 mg/kg/day divided into 2-3 doses.",
        interactions: "Probenecid, allopurinol, anticoagulants, oral contraceptives, methotrexate.",
        sideEffects: "Diarrhea, nausea, vomiting, skin rash, allergic reactions.",
        warnings: "Avoid use in cases of hypersensitivity to penicillins or cephalosporins. Dose adjustment required in renal impairment.",
        clinicalPearls: "Best taken with food to reduce gastrointestinal disturbances. Can be used with clavulanic acid (co-amoxiclav) to increase effectiveness against beta-lactamase producing bacteria."
    },
    "atorvastatin": {
        name: "Atorvastatin",
        indications: "Cholesterol-lowering statin. Used for prevention of cardiovascular disease and reduction of cholesterol and triglyceride levels.",
        dosage: "10-80 mg once daily, preferably in the evening.",
        interactions: "Azole antifungals, erythromycin, clarithromycin, grapefruit juice, diltiazem, verapamil, fibrates, digoxin.",
        sideEffects: "Muscle pain, elevated liver enzymes, headache, gastrointestinal disturbances, skin rash.",
        warnings: "Monitor liver and muscle function. Avoid during pregnancy and breastfeeding. Use with caution in patients with liver and kidney disease.",
        clinicalPearls: "Most potent statin for cholesterol reduction. Can be taken at any time of day unlike most other statins. Effect begins after two weeks and reaches maximum after 4-6 weeks."
    },
    "metformin": {
        name: "Metformin",
        indications: "Biguanide antidiabetic. First-line treatment for type 2 diabetes mellitus.",
        dosage: "Start with 500 mg once or twice daily, then gradually increase based on response. Maximum dose 2550 mg daily divided into 3 doses.",
        interactions: "Alcohol, iodinated contrast media, cimetidine, digoxin, diuretics, NSAIDs.",
        sideEffects: "Gastrointestinal disturbances (nausea, diarrhea, bloating), metallic taste, vitamin B12 deficiency.",
        warnings: "Avoid use in severe renal impairment (eGFR < 30 ml/min), hepatic impairment, congestive heart failure, lactic acidosis.",
        clinicalPearls: "Should be taken with meals to reduce gastrointestinal side effects. Does not cause hypoglycemia when used alone. Helps with weight reduction unlike most other diabetes medications."
    },
    "lisinopril": {
        name: "Lisinopril",
        indications: "Angiotensin-converting enzyme (ACE) inhibitor. Used for hypertension, heart failure, post-myocardial infarction, and diabetic nephropathy.",
        dosage: "Hypertension: 10-40 mg once daily. Heart failure: 5-20 mg once daily.",
        interactions: "Potassium supplements, potassium-sparing diuretics, NSAIDs, lithium.",
        sideEffects: "Dry cough, dizziness, headache, hyperkalemia, hypotension, renal impairment.",
        warnings: "Avoid during pregnancy (especially 2nd and 3rd trimesters). Can cause angioedema. Monitor renal function and potassium levels.",
        clinicalPearls: "No dose adjustment needed for meals. May take several weeks to achieve full blood pressure effect. Dry cough is the most common side effect and may persist throughout treatment."
    },
    "omeprazole": {
        name: "Omeprazole",
        indications: "Proton pump inhibitor. Used for gastric and duodenal ulcers, gastroesophageal reflux disease (GERD), Zollinger-Ellison syndrome.",
        dosage: "20-40 mg once daily for 4-8 weeks.",
        interactions: "Diazepam, phenytoin, warfarin, clopidogrel, ketoconazole, atazanavir.",
        sideEffects: "Headache, diarrhea, abdominal pain, nausea, dizziness.",
        warnings: "Long-term use may increase risk of bone fractures, vitamin B12 deficiency, hypomagnesemia, Clostridium difficile-associated diarrhea.",
        clinicalPearls: "Should be taken 30-60 minutes before meals. Capsules can be opened and contents taken with apple juice or yogurt for patients who have difficulty swallowing. Effect begins after 1-2 hours and lasts for 72 hours."
    },
    "warfarin": {
        name: "Warfarin",
        indications: "Anticoagulant. Used for prevention and treatment of venous thrombosis, pulmonary embolism, atrial fibrillation, and prosthetic heart valves.",
        dosage: "Varies from patient to patient based on target INR. Usually starts with 5 mg daily then adjusted.",
        interactions: "Numerous interactions with medications, foods, and herbal supplements. Most important: NSAIDs, antibiotics, antifungals, foods rich in vitamin K.",
        sideEffects: "Bleeding, bruising, hematuria, melena, skin rash, hair loss.",
        warnings: "Requires close INR monitoring. Avoid during pregnancy. Bleeding risk increases with age, prior bleeding history, uncontrolled hypertension.",
        clinicalPearls: "Maintain relative consistency in vitamin K-rich food intake. Effect can persist for several days after discontinuation. Effect can be reversed with vitamin K or fresh frozen plasma in cases of severe bleeding."
    },
    "salbutamol": {
        name: "Salbutamol (Albuterol)",
        indications: "Beta-2 agonist bronchodilator. Used for treatment and relief of asthma symptoms, chronic obstructive pulmonary disease (COPD).",
        dosage: "Inhalation aerosol: 1-2 puffs (100-200 mcg) every 4-6 hours as needed. Nebulizer solution: 2.5-5 mg every 4-6 hours.",
        interactions: "Non-selective beta-blockers, diuretics, digoxin, tricyclic antidepressants.",
        sideEffects: "Tremor, tachycardia, nervousness, headache, hypokalemia.",
        warnings: "Use with caution in patients with heart disease, hypertension, hyperthyroidism, diabetes.",
        clinicalPearls: "Excessive use may lead to decreased effectiveness and increased side effects. Use a spacer with inhaler to improve lung delivery. Effect begins within 5 minutes and lasts for 4-6 hours."
    },
    "insulin": {
        name: "Insulin",
        indications: "Hormone that lowers blood glucose. Used for treatment of type 1 diabetes and advanced type 2 diabetes.",
        dosage: "Varies based on insulin type, patient weight, blood glucose level, and diet. Dose adjusted based on blood glucose monitoring.",
        interactions: "Oral hypoglycemic agents, beta-blockers, ACE inhibitors, alcohol.",
        sideEffects: "Hypoglycemia, weight gain, local reactions at injection site.",
        warnings: "Risk of severe hypoglycemia. Dose adjustment needed with exercise, illness, and dietary changes.",
        clinicalPearls: "Insulin types differ in onset and duration: rapid-acting (15 min), short-acting (30 min), intermediate-acting (1-2 hrs), long-acting (1-2 hrs with sustained effect). Store in refrigerator before opening and at room temperature after opening for 28 days."
    },
    "amlodipine": {
        name: "Amlodipine",
        indications: "Calcium channel blocker. Used for hypertension, stable angina pectoris.",
        dosage: "2.5-10 mg once daily.",
        interactions: "Grapefruit, azole antifungals, beta-blockers, digoxin, statins.",
        sideEffects: "Peripheral edema, headache, dizziness, flushing, palpitations.",
        warnings: "Use with caution in patients with heart failure, liver disease. May need dose reduction in elderly.",
        clinicalPearls: "Can be taken with or without food. Long-acting effect allows once-daily dosing. Peripheral edema is the most common side effect and is worse in the evening."
    }
};

// Combine English translations for all drugs
const allDrugsDatabaseEN = { ...drugsDatabaseEN, ...additionalDrugsEN };

// English translations for therapeutic conditions
const therapeuticConditionsEN = {
    "hypertension": {
        title: "Hypertension (HTN)",
        description: "Hypertension is a chronic condition characterized by persistently elevated blood pressure in the arteries. It increases the risk of heart disease, stroke, and kidney disease.",
        medications: [
            {
                name: "Angiotensin-Converting Enzyme (ACE) Inhibitors",
                examples: "Lisinopril, Enalapril, Ramipril",
                dosage: "Lisinopril: 10-40 mg once daily",
                precautions: "Monitor renal function and potassium levels. Avoid during pregnancy. May cause dry cough.",
                alternatives: "Angiotensin Receptor Blockers (ARBs) if cough is not tolerated."
            },
            {
                name: "Calcium Channel Blockers (CCBs)",
                examples: "Amlodipine, Nifedipine, Diltiazem",
                dosage: "Amlodipine: 5-10 mg once daily",
                precautions: "May cause peripheral edema, headache, flushing. Use with caution in heart failure patients.",
                alternatives: "Thiazide diuretics or ACE inhibitors."
            },
            {
                name: "Thiazide Diuretics",
                examples: "Hydrochlorothiazide, Chlorthalidone, Indapamide",
                dosage: "Hydrochlorothiazide: 12.5-25 mg once daily",
                precautions: "Monitor electrolyte levels, especially potassium. May increase uric acid and blood glucose levels.",
                alternatives: "ACE inhibitors or calcium channel blockers."
            },
            {
                name: "Angiotensin Receptor Blockers (ARBs)",
                examples: "Losartan, Valsartan, Candesartan",
                dosage: "Losartan: 50-100 mg once daily",
                precautions: "Monitor renal function and potassium levels. Avoid during pregnancy.",
                alternatives: "ACE inhibitors or calcium channel blockers."
            }
        ]
    },
    "diabetes": {
        title: "Diabetes Mellitus (DM)",
        description: "Diabetes is a chronic metabolic disorder characterized by elevated blood glucose levels due to insufficient insulin secretion or the body's resistance to its effects.",
        medications: [
            {
                name: "Metformin (Biguanides)",
                examples: "Metformin",
                dosage: "Start with 500 mg once or twice daily, gradually increase to 2000-2500 mg daily divided into 2-3 doses",
                precautions: "Avoid in severe renal impairment (eGFR < 30). May cause gastrointestinal disturbances and vitamin B12 deficiency.",
                alternatives: "SGLT-2 inhibitors or GLP-1 receptor agonists."
            },
            {
                name: "SGLT-2 Inhibitors",
                examples: "Empagliflozin, Dapagliflozin, Canagliflozin",
                dosage: "Empagliflozin: 10-25 mg once daily",
                precautions: "Monitor renal function. May increase risk of urinary tract and genital fungal infections.",
                alternatives: "GLP-1 receptor agonists or metformin."
            },
            {
                name: "GLP-1 Receptor Agonists",
                examples: "Liraglutide, Semaglutide, Dulaglutide",
                dosage: "Liraglutide: Start with 0.6 mg daily for one week, then increase to 1.2-1.8 mg daily",
                precautions: "May cause nausea, vomiting, diarrhea. Avoid in cases of pancreatitis or medullary thyroid cancer.",
                alternatives: "SGLT-2 inhibitors or metformin."
            },
            {
                name: "Insulin",
                examples: "Rapid-acting insulin, intermediate-acting insulin, long-acting insulin",
                dosage: "Varies based on insulin type and blood glucose level. Usually starts with 0.1-0.2 units/kg/day for basal insulin",
                precautions: "Risk of hypoglycemia. Requires blood glucose monitoring and dose adjustment with meals, exercise, and illness.",
                alternatives: "Combination of oral antidiabetic agents for type 2 diabetes."
            }
        ]
    }
};

// English translations for guidelines data
const guidelinesDataEN = {
    "cardiology": [
        {
            title: "American Heart Association (AHA) Guidelines for Hypertension Management",
            organization: "American Heart Association (AHA)",
            year: "2023",
            description: "Comprehensive guidelines for diagnosis and treatment of hypertension, including blood pressure targets and pharmacological and non-pharmacological treatments.",
            url: "https://professional.heart.org/en/guidelines-and-statements"
        },
        {
            title: "American College of Cardiology (ACC) Guidelines for Heart Failure",
            organization: "American College of Cardiology (ACC)",
            year: "2022",
            description: "Updated recommendations for diagnosis and treatment of heart failure, including new pharmacological therapies, devices, and interventions.",
            url: "https://www.acc.org/guidelines"
        }
    ],
    "endocrinology": [
        {
            title: "American Diabetes Association (ADA) Standards of Medical Care in Diabetes",
            organization: "American Diabetes Association (ADA)",
            year: "2023",
            description: "Comprehensive standards of medical care for diabetes patients, including glycemic control targets, pharmacological treatments, and nutrition.",
            url: "https://professional.diabetes.org/content-page/practice-guidelines-resources"
        },
        {
            title: "European Association for the Study of Diabetes (EASD) Guidelines for Type 2 Diabetes",
            organization: "European Association for the Study of Diabetes (EASD)",
            year: "2022",
            description: "Updated recommendations for management of type 2 diabetes, with focus on patient-centered approach and prevention of cardiovascular complications.",
            url: "https://www.easd.org/statements.html"
        }
    ],
    "nephrology": [
        {
            title: "KDIGO Guidelines for Evaluation and Management of Chronic Kidney Disease",
            organization: "Kidney Disease: Improving Global Outcomes (KDIGO)",
            year: "2023",
            description: "Comprehensive guidelines for diagnosis, classification, and treatment of chronic kidney disease, including strategies to slow disease progression.",
            url: "https://kdigo.org/guidelines/"
        }
    ],
    "pulmonology": [
        {
            title: "Global Initiative for Asthma (GINA) Guidelines for Asthma Management",
            organization: "Global Initiative for Asthma (GINA)",
            year: "2023",
            description: "Global strategy for asthma management and diagnosis, with updated recommendations for treatment and symptom control.",
            url: "https://ginasthma.org/"
        },
        {
            title: "Global Initiative for Chronic Obstructive Lung Disease (GOLD) Guidelines",
            organization: "Global Initiative for Chronic Obstructive Lung Disease (GOLD)",
            year: "2023",
            description: "Global strategy for diagnosis, management, and prevention of chronic obstructive pulmonary disease (COPD).",
            url: "https://goldcopd.org/"
        }
    ],
    "infectious": [
        {
            title: "Infectious Diseases Society of America (IDSA) Guidelines for Antimicrobial Therapy",
            organization: "Infectious Diseases Society of America (IDSA)",
            year: "2023",
            description: "Evidence-based recommendations for antimicrobial therapy for various infectious diseases.",
            url: "https://www.idsociety.org/practice-guideline/practice-guidelines/"
        }
    ],
    "gastroenterology": [
        {
            title: "American College of Gastroenterology (ACG) Guidelines for GERD Treatment",
            organization: "American College of Gastroenterology (ACG)",
            year: "2022",
            description: "Updated recommendations for diagnosis and treatment of gastroesophageal reflux disease (GERD).",
            url: "https://gi.org/guidelines/"
        }
    ]
};

// DOM Elements
const drugSearchInput = document.getElementById('drug-search');
const searchBtn = document.getElementById('search-btn');
const drugInfoContainer = document.getElementById('drug-info');
const calculateDoseBtn = document.getElementById('calculate-dose');
const doseResultContainer = document.getElementById('dose-result');
const conditionsList = document.getElementById('conditions-list');
const conditionDetails = document.getElementById('condition-details');
const guidelineFilter = document.getElementById('guideline-filter');
const guidelinesList = document.getElementById('guidelines-list');
const themeToggle = document.getElementById('theme-toggle');
const languageToggle = document.getElementById('language-toggle');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const closeMenu = document.querySelector('.close-menu');
const overlay = document.querySelector('.overlay');
const navLinks = document.querySelectorAll('nav ul li a');
const mobileNavLinks = document.querySelectorAll('.mobile-menu ul li a');
const sections = document.querySelectorAll('.section');
const contactForm = document.getElementById('contact-form');

// Function to get text based on current language
function getText(key) {
    return translations[currentLang][key] || key;
}

// Function to update UI text based on current language
function updateUIText() {
    // Update document title
    document.title = getText('title');
    
    // Update header elements
    document.querySelector('.logo h1').textContent = 'WALY';
    document.querySelector('.logo p').textContent = getText('subtitle');
    
    // Update navigation
    navLinks[0].innerHTML = `<i class="fas fa-pills"></i> ${getText('drug_database')}`;
    navLinks[1].innerHTML = `<i class="fas fa-calculator"></i> ${getText('dose_calculator')}`;
    navLinks[2].innerHTML = `<i class="fas fa-stethoscope"></i> ${getText('therapeutic_helper')}`;
    navLinks[3].innerHTML = `<i class="fas fa-book-medical"></i> ${getText('guidelines')}`;
    navLinks[4].innerHTML = `<i class="fas fa-envelope"></i> ${getText('contact')}`;
    
    // Update mobile navigation
    mobileNavLinks[0].innerHTML = `<i class="fas fa-pills"></i> ${getText('drug_database')}`;
    mobileNavLinks[1].innerHTML = `<i class="fas fa-calculator"></i> ${getText('dose_calculator')}`;
    mobileNavLinks[2].innerHTML = `<i class="fas fa-stethoscope"></i> ${getText('therapeutic_helper')}`;
    mobileNavLinks[3].innerHTML = `<i class="fas fa-book-medical"></i> ${getText('guidelines')}`;
    mobileNavLinks[4].innerHTML = `<i class="fas fa-envelope"></i> ${getText('contact')}`;
    
    // Update settings
    themeToggle.title = getText('theme_toggle');
    languageToggle.querySelector('span').textContent = getText('language_toggle');
    
    // Update section titles
    document.querySelectorAll('.section-title')[0].innerHTML = `<i class="fas fa-pills"></i> ${getText('drug_database')}`;
    document.querySelectorAll('.section-title')[1].innerHTML = `<i class="fas fa-calculator"></i> ${getText('calculator_title')}`;
    document.querySelectorAll('.section-title')[2].innerHTML = `<i class="fas fa-stethoscope"></i> ${getText('therapeutic_helper_title')}`;
    document.querySelectorAll('.section-title')[3].innerHTML = `<i class="fas fa-book-medical"></i> ${getText('guidelines_title')}`;
    document.querySelectorAll('.section-title')[4].innerHTML = `<i class="fas fa-envelope"></i> ${getText('contact_title')}`;
    
    // Update drug database section
    drugSearchInput.placeholder = getText('search_placeholder');
    searchBtn.innerHTML = `<i class="fas fa-search"></i>`;
    if (drugInfoContainer.querySelector('.placeholder-message')) {
        drugInfoContainer.querySelector('.placeholder-message p').textContent = getText('search_message');
    }
    
    // Update dose calculator section
    document.querySelector('label[for="drug-name"]').textContent = getText('drug_name_label');
    document.getElementById('drug-name').placeholder = getText('drug_name_placeholder');
    document.querySelector('label[for="patient-weight"]').textContent = getText('patient_weight_label');
    document.getElementById('patient-weight').placeholder = getText('patient_weight_placeholder');
    document.querySelector('label[for="patient-age"]').textContent = getText('patient_age_label');
    document.getElementById('patient-age').placeholder = getText('patient_age_placeholder');
    document.querySelector('label[for="serum-creatinine"]').textContent = getText('serum_creatinine_label');
    document.getElementById('serum-creatinine').placeholder = getText('serum_creatinine_placeholder');
    document.querySelector('.form-group:nth-child(5) label').textContent = getText('gender_label');
    document.querySelectorAll('.radio-group label')[0].textContent = ` ${getText('male')}`;
    document.querySelectorAll('.radio-group label')[1].textContent = ` ${getText('female')}`;
    calculateDoseBtn.textContent = getText('calculate_button');
    if (doseResultContainer.querySelector('.placeholder-message')) {
        doseResultContainer.querySelector('.placeholder-message p').textContent = getText('calculator_message');
    }
    
    // Update therapeutic helper section
    document.querySelector('.conditions-sidebar h3').textContent = getText('clinical_conditions');
    
    // Update conditions list based on language
    const conditionsItems = conditionsList.querySelectorAll('li');
    if (currentLang === 'en') {
        conditionsItems[0].textContent = 'Hypertension (HTN)';
        conditionsItems[1].textContent = 'Diabetes Mellitus (DM)';
        conditionsItems[2].textContent = 'Chronic Kidney Disease (CKD)';
        conditionsItems[3].textContent = 'Heart Failure';
        conditionsItems[4].textContent = 'Bacterial Infections';
        conditionsItems[5].textContent = 'Asthma';
        conditionsItems[6].textContent = 'Chronic Obstructive Pulmonary Disease (COPD)';
        conditionsItems[7].textContent = 'Dyslipidemia';
        conditionsItems[8].textContent = 'Gastroesophageal Reflux Disease (GERD)';
        conditionsItems[9].textContent = 'Peptic Ulcer Disease';
    } else {
        conditionsItems[0].textContent = 'ارتفاع ضغط الدم (HTN)';
        conditionsItems[1].textContent = 'داء السكري (DM)';
        conditionsItems[2].textContent = 'أمراض الكلى المزمنة (CKD)';
        conditionsItems[3].textContent = 'قصور القلب';
        conditionsItems[4].textContent = 'العدوى البكتيرية';
        conditionsItems[5].textContent = 'الربو';
        conditionsItems[6].textContent = 'مرض الانسداد الرئوي المزمن (COPD)';
        conditionsItems[7].textContent = 'اضطرابات الدهون';
        conditionsItems[8].textContent = 'ارتجاع المريء (GERD)';
        conditionsItems[9].textContent = 'قرحة المعدة';
    }
    
    // Update guidelines section
    const guidelineOptions = guidelineFilter.querySelectorAll('option');
    guidelineOptions[0].textContent = getText('all_guidelines');
    guidelineOptions[1].textContent = getText('cardiology');
    guidelineOptions[2].textContent = getText('endocrinology');
    guidelineOptions[3].textContent = getText('nephrology');
    guidelineOptions[4].textContent = getText('pulmonology');
    guidelineOptions[5].textContent = getText('infectious');
    guidelineOptions[6].textContent = getText('gastroenterology');
    
    // Update contact section
    document.querySelector('.info-content h3').textContent = getText('name');
    document.querySelector('.info-content p:nth-child(2)').textContent = getText('profession');
    document.querySelector('.info-content p:nth-child(3)').textContent = getText('education');
    document.querySelectorAll('.info-content h3')[1].textContent = getText('phone');
    document.querySelectorAll('.info-content h3')[2].textContent = getText('email');
    document.querySelector('.contact-form h3').textContent = getText('send_message');
    document.querySelector('label[for="name"]').textContent = getText('name_label');
    document.querySelector('label[for="email"]').textContent = getText('email_label');
    document.querySelector('label[for="message"]').textContent = getText('message_label');
    document.querySelector('.contact-form button').textContent = getText('send_button');
    
    // Update footer
    document.querySelector('.footer-logo h2').textContent = 'WALY';
    document.querySelector('.footer-logo p').textContent = getText('subtitle');
    document.querySelector('.footer-links h3').textContent = getText('quick_links');
    const footerLinks = document.querySelectorAll('.footer-links ul li a');
    footerLinks[0].textContent = getText('drug_database');
    footerLinks[1].textContent = getText('dose_calculator');
    footerLinks[2].textContent = getText('therapeutic_helper');
    footerLinks[3].textContent = getText('guidelines');
    footerLinks[4].textContent = getText('contact');
    document.querySelector('.footer-bottom p').textContent = getText('copyright');
    
    // Update active content if any
    updateActiveContent();
}

// Function to update active content based on current section
function updateActiveContent() {
    const activeSection = document.querySelector('.section.active');
    if (!activeSection) return;
    
    const sectionId = activeSection.id;
    
    if (sectionId === 'drug-database') {
        // If drug info is displayed, update it with current language
        if (!drugInfoContainer.querySelector('.placeholder-message')) {
            const drugName = drugInfoContainer.querySelector('h3').getAttribute('data-drug');
            displayDrugInfo(drugName);
        }
    } else if (sectionId === 'therapeutic-helper') {
        // If condition details are displayed, update them with current language
        const activeCondition = conditionsList.querySelector('.active');
        if (activeCondition) {
            const conditionId = activeCondition.getAttribute('data-condition');
            displayConditionDetails(conditionId);
        }
    } else if (sectionId === 'guidelines') {
        // Update guidelines list with current language
        const selectedCategory = guidelineFilter.value;
        displayGuidelines(selectedCategory);
    }
}

// Function to toggle language
function toggleLanguage() {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    
    // Toggle HTML direction
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    
    // Update UI text
    updateUIText();
}

// Function to display drug information
function displayDrugInfo(drugName) {
    if (!drugName) return;
    
    // Get drug data based on current language
    const drugData = currentLang === 'ar' ? 
        allDrugsDatabase[drugName] : 
        allDrugsDatabaseEN[drugName];
    
    if (!drugData) {
        drugInfoContainer.innerHTML = `
            <div class="error-message">
                <i class="fas fa-exclamation-circle fa-3x"></i>
                <p>${currentLang === 'ar' ? 'لم يتم العثور على معلومات لهذا الدواء' : 'No information found for this drug'}</p>
            </div>
        `;
        return;
    }
    
    drugInfoContainer.innerHTML = `
        <div class="drug-info">
            <h3 data-drug="${drugName}">${drugData.name}</h3>
            
            <div class="info-section">
                <h4><i class="fas fa-info-circle"></i> ${getText('indications')}</h4>
                <p>${drugData.indications}</p>
            </div>
            
            <div class="info-section">
                <h4><i class="fas fa-prescription-bottle-alt"></i> ${getText('dosage')}</h4>
                <p>${drugData.dosage}</p>
            </div>
            
            <div class="info-section">
                <h4><i class="fas fa-exchange-alt"></i> ${getText('interactions')}</h4>
                <p>${drugData.interactions}</p>
            </div>
            
            <div class="info-section">
                <h4><i class="fas fa-exclamation-triangle"></i> ${getText('side_effects')}</h4>
                <p>${drugData.sideEffects}</p>
            </div>
            
            <div class="info-section">
                <h4><i class="fas fa-ban"></i> ${getText('warnings')}</h4>
                <p>${drugData.warnings}</p>
            </div>
            
            <div class="info-section">
                <h4><i class="fas fa-lightbulb"></i> ${getText('clinical_pearls')}</h4>
                <p>${drugData.clinicalPearls}</p>
            </div>
        </div>
    `;
}

// Function to calculate creatinine clearance
function calculateCreatinineClearance(weight, age, gender, serumCreatinine) {
    // Cockcroft-Gault equation
    let crCl = ((140 - age) * weight) / (72 * serumCreatinine);
    if (gender === 'female') {
        crCl *= 0.85;
    }
    return crCl.toFixed(2);
}

// Function to assess kidney function
function assessKidneyFunction(crCl) {
    if (crCl >= 90) {
        return currentLang === 'ar' ? 'طبيعية' : 'Normal';
    } else if (crCl >= 60) {
        return currentLang === 'ar' ? 'انخفاض طفيف' : 'Mild Impairment';
    } else if (crCl >= 30) {
        return currentLang === 'ar' ? 'انخفاض متوسط' : 'Moderate Impairment';
    } else if (crCl >= 15) {
        return currentLang === 'ar' ? 'انخفاض شديد' : 'Severe Impairment';
    } else {
        return currentLang === 'ar' ? 'فشل كلوي' : 'Kidney Failure';
    }
}

// Function to calculate dose
function calculateDose() {
    const drugName = document.getElementById('drug-name').value.trim().toLowerCase();
    const weight = parseFloat(document.getElementById('patient-weight').value);
    const age = parseInt(document.getElementById('patient-age').value);
    const serumCreatinine = parseFloat(document.getElementById('serum-creatinine').value);
    const gender = document.querySelector('input[name="gender"]:checked').value;
    
    if (!drugName || isNaN(weight) || isNaN(age) || isNaN(serumCreatinine)) {
        doseResultContainer.innerHTML = `
            <div class="error-message">
                <i class="fas fa-exclamation-circle fa-3x"></i>
                <p>${currentLang === 'ar' ? 'يرجى إدخال جميع البيانات المطلوبة' : 'Please enter all required data'}</p>
            </div>
        `;
        return;
    }
    
    // Calculate creatinine clearance
    const crCl = calculateCreatinineClearance(weight, age, gender, serumCreatinine);
    const kidneyFunction = assessKidneyFunction(crCl);
    
    // Get drug data
    const drugData = currentLang === 'ar' ? 
        (allDrugsDatabase[drugName] || null) : 
        (allDrugsDatabaseEN[drugName] || null);
    
    if (!drugData) {
        doseResultContainer.innerHTML = `
            <div class="error-message">
                <i class="fas fa-exclamation-circle fa-3x"></i>
                <p>${currentLang === 'ar' ? 'لم يتم العثور على معلومات لهذا الدواء' : 'No information found for this drug'}</p>
            </div>
        `;
        return;
    }
    
    // Display results
    doseResultContainer.innerHTML = `
        <div class="dose-result-content">
            <div class="result-section">
                <h4>${getText('patient_info')}</h4>
                <div class="result-grid">
                    <div class="result-item">
                        <span>${getText('weight')}:</span>
                        <span>${weight} ${currentLang === 'ar' ? 'كجم' : 'kg'}</span>
                    </div>
                    <div class="result-item">
                        <span>${getText('age')}:</span>
                        <span>${age} ${currentLang === 'ar' ? 'سنة' : 'years'}</span>
                    </div>
                    <div class="result-item">
                        <span>${getText('gender')}:</span>
                        <span>${gender === 'male' ? (currentLang === 'ar' ? 'ذكر' : 'Male') : (currentLang === 'ar' ? 'أنثى' : 'Female')}</span>
                    </div>
                    <div class="result-item">
                        <span>${getText('creatinine')}:</span>
                        <span>${serumCreatinine} mg/dL</span>
                    </div>
                </div>
            </div>
            
            <div class="result-section">
                <h4>${getText('kidney_function')}</h4>
                <div class="result-grid">
                    <div class="result-item">
                        <span>${getText('creatinine_clearance')}:</span>
                        <span>${crCl} mL/min</span>
                    </div>
                    <div class="result-item">
                        <span>${getText('kidney_function_status')}:</span>
                        <span>${kidneyFunction}</span>
                    </div>
                </div>
            </div>
            
            <div class="result-section">
                <h4>${getText('dose_recommendations')} ${drugData.name}</h4>
                <p>${drugData.dosage}</p>
                
                <div class="additional-notes">
                    <h5>${getText('additional_notes')}</h5>
                    <ul>
                        <li>${drugData.warnings}</li>
                        <li>${drugData.clinicalPearls}</li>
                    </ul>
                </div>
            </div>
        </div>
    `;
}

// Function to display condition details
function displayConditionDetails(conditionId) {
    // Get condition data based on current language
    const conditionData = currentLang === 'ar' ? 
        therapeuticConditions[conditionId] : 
        therapeuticConditionsEN[conditionId];
    
    if (!conditionData) {
        conditionDetails.innerHTML = `
            <div class="error-message">
                <i class="fas fa-exclamation-circle fa-3x"></i>
                <p>${currentLang === 'ar' ? 'لم يتم العثور على معلومات لهذه الحالة' : 'No information found for this condition'}</p>
            </div>
        `;
        return;
    }
    
    let medicationsHTML = '';
    conditionData.medications.forEach(med => {
        medicationsHTML += `
            <div class="medication-card">
                <h4>${med.name}</h4>
                <div class="medication-details">
                    <div class="detail-item">
                        <span>${getText('examples')}:</span>
                        <span>${med.examples}</span>
                    </div>
                    <div class="detail-item">
                        <span>${getText('dosage')}:</span>
                        <span>${med.dosage}</span>
                    </div>
                    <div class="detail-item">
                        <span>${getText('precautions')}:</span>
                        <span>${med.precautions}</span>
                    </div>
                    <div class="detail-item">
                        <span>${getText('alternatives')}:</span>
                        <span>${med.alternatives}</span>
                    </div>
                </div>
            </div>
        `;
    });
    
    conditionDetails.innerHTML = `
        <div class="condition-header">
            <h3>${conditionData.title}</h3>
            <p>${conditionData.description}</p>
        </div>
        
        <div class="medications-container">
            <h4>${getText('recommended_medications')}</h4>
            <div class="medications-grid">
                ${medicationsHTML}
            </div>
        </div>
    `;
}

// Function to display guidelines
function displayGuidelines(category) {
    let guidelinesHTML = '';
    let guidelinesSource = currentLang === 'ar' ? guidelinesData : guidelinesDataEN;
    
    if (category === 'all') {
        // Display all guidelines
        Object.keys(guidelinesSource).forEach(cat => {
            guidelinesSource[cat].forEach(guideline => {
                guidelinesHTML += createGuidelineCard(guideline);
            });
        });
    } else {
        // Display guidelines for selected category
        if (guidelinesSource[category]) {
            guidelinesSource[category].forEach(guideline => {
                guidelinesHTML += createGuidelineCard(guideline);
            });
        }
    }
    
    if (guidelinesHTML === '') {
        guidelinesList.innerHTML = `
            <div class="error-message">
                <i class="fas fa-exclamation-circle fa-3x"></i>
                <p>${currentLang === 'ar' ? 'لم يتم العثور على إرشادات في هذه الفئة' : 'No guidelines found in this category'}</p>
            </div>
        `;
    } else {
        guidelinesList.innerHTML = guidelinesHTML;
    }
}

// Function to create guideline card
function createGuidelineCard(guideline) {
    return `
        <div class="guideline-card">
            <h4>${guideline.title}</h4>
            <div class="guideline-details">
                <div class="detail-item">
                    <span>${getText('organization')}:</span>
                    <span>${guideline.organization}</span>
                </div>
                <div class="detail-item">
                    <span>${getText('year')}:</span>
                    <span>${guideline.year}</span>
                </div>
            </div>
            <p>${guideline.description}</p>
            <a href="${guideline.url}" target="_blank" class="btn">${getText('open_guidelines')}</a>
        </div>
    `;
}

// Function to toggle theme
function toggleTheme() {
    const themeStyle = document.getElementById('theme-style');
    const currentTheme = themeStyle.getAttribute('href');
    
    if (currentTheme.includes('light-theme')) {
        themeStyle.setAttribute('href', 'css/dark-theme.css');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        themeStyle.setAttribute('href', 'css/light-theme.css');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
}

// Function to toggle mobile menu
function toggleMobileMenu() {
    mobileMenu.classList.toggle('active');
    overlay.classList.toggle('active');
}

// Function to navigate to section
function navigateToSection(sectionId) {
    // Hide all sections
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Show selected section
    document.getElementById(sectionId).classList.add('active');
    
    // Update active nav link
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
        }
    });
    
    // Close mobile menu if open
    mobileMenu.classList.remove('active');
    overlay.classList.remove('active');
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    // Search drug
    searchBtn.addEventListener('click', function() {
        const drugName = drugSearchInput.value.trim().toLowerCase();
        if (drugName) {
            displayDrugInfo(drugName);
        }
    });
    
    drugSearchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const drugName = drugSearchInput.value.trim().toLowerCase();
            if (drugName) {
                displayDrugInfo(drugName);
            }
        }
    });
    
    // Calculate dose
    calculateDoseBtn.addEventListener('click', calculateDose);
    
    // Display condition details
    conditionsList.addEventListener('click', function(e) {
        if (e.target.tagName === 'LI') {
            // Update active class
            conditionsList.querySelectorAll('li').forEach(li => {
                li.classList.remove('active');
            });
            e.target.classList.add('active');
            
            // Display condition details
            const conditionId = e.target.getAttribute('data-condition');
            displayConditionDetails(conditionId);
        }
    });
    
    // Filter guidelines
    guidelineFilter.addEventListener('change', function() {
        const category = this.value;
        displayGuidelines(category);
    });
    
    // Toggle theme
    themeToggle.addEventListener('click', toggleTheme);
    
    // Toggle language
    languageToggle.addEventListener('click', toggleLanguage);
    
    // Mobile menu
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    closeMenu.addEventListener('click', toggleMobileMenu);
    overlay.addEventListener('click', toggleMobileMenu);
    
    // Navigation
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute('href').substring(1);
            navigateToSection(sectionId);
        });
    });
    
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute('href').substring(1);
            navigateToSection(sectionId);
        });
    });
    
    // Contact form
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert(currentLang === 'ar' ? 'تم إرسال رسالتك بنجاح!' : 'Your message has been sent successfully!');
        this.reset();
    });
    
    // Initialize
    displayGuidelines('all');
    displayConditionDetails('hypertension');
    
    // Set first section as active
    navigateToSection('drug-database');
});
