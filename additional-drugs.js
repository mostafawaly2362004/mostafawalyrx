// Additional drugs for the expanded database
const additionalDrugs = {
    "ciprofloxacin": {
        name: "سيبروفلوكساسين (Ciprofloxacin)",
        indications: "مضاد حيوي من مجموعة الفلوروكينولونات. يستخدم لعلاج التهابات المسالك البولية، التهابات الجهاز التنفسي، التهابات الجلد والأنسجة الرخوة، التهابات العظام والمفاصل، والتهابات الجهاز الهضمي.",
        dosage: "البالغين: 250-750 ملغ مرتين يومياً حسب شدة العدوى. مدة العلاج تتراوح بين 3-14 يوم حسب نوع العدوى.",
        interactions: "الأدوية التي تحتوي على الألمنيوم أو المغنيسيوم أو الكالسيوم، الحديد، الزنك، سوكرالفيت، ثيوفيلين، وارفارين، مضادات الصرع.",
        sideEffects: "غثيان، إسهال، صداع، دوخة، طفح جلدي، تغيرات في وظائف الكبد. نادراً: التهاب الأوتار أو تمزقها، اضطرابات عصبية، فرط الحساسية.",
        warnings: "يجب تجنب استخدامه في الأطفال والمراهقين، الحوامل، والمرضعات. يزيد من خطر تمزق الأوتار، خاصة في كبار السن. يجب شرب كميات كافية من الماء أثناء العلاج.",
        clinicalPearls: "يجب تناوله قبل ساعتين أو بعد ساعتين من منتجات الألمنيوم/المغنيسيوم/الكالسيوم. يمكن أن يسبب حساسية للضوء، لذا يجب تجنب التعرض المباشر لأشعة الشمس."
    },
    "azithromycin": {
        name: "أزيثرومايسين (Azithromycin)",
        indications: "مضاد حيوي من مجموعة الماكروليدات. يستخدم لعلاج التهابات الجهاز التنفسي، التهابات الأذن، التهابات الجلد والأنسجة الرخوة، والأمراض المنقولة جنسياً.",
        dosage: "البالغين: 500 ملغ في اليوم الأول، ثم 250 ملغ يومياً لمدة 4 أيام. أو 500 ملغ يومياً لمدة 3 أيام. الأطفال: 10 ملغ/كغ في اليوم الأول، ثم 5 ملغ/كغ يومياً لمدة 4 أيام.",
        interactions: "الأدوية التي تطيل فترة QT، الستاتينات، الوارفارين، الديجوكسين، السيكلوسبورين.",
        sideEffects: "غثيان، إسهال، آلام بطنية، صداع. نادراً: اضطرابات في وظائف الكبد، تفاعلات تحسسية، اضطرابات في نظم القلب.",
        warnings: "يجب استخدامه بحذر في المرضى الذين يعانون من مشاكل في القلب أو الكبد. قد يطيل فترة QT مما يزيد من خطر اضطرابات نظم القلب.",
        clinicalPearls: "يمكن تناوله مع أو بدون طعام. يتميز بنصف عمر طويل مما يسمح بنظام جرعات قصير. يتركز بشكل جيد في الأنسجة مما يجعله فعالاً ضد العديد من أنواع العدوى."
    },
    "ceftriaxone": {
        name: "سيفترياكسون (Ceftriaxone)",
        indications: "مضاد حيوي من الجيل الثالث من السيفالوسبورينات. يستخدم لعلاج التهابات الجهاز التنفسي الشديدة، التهاب السحايا، التهابات المسالك البولية المعقدة، التهابات البطن، التهابات العظام والمفاصل، والأمراض المنقولة جنسياً.",
        dosage: "البالغين: 1-2 غرام مرة واحدة يومياً (يمكن تقسيمها إلى جرعتين في الحالات الشديدة). الأطفال: 50-100 ملغ/كغ/يوم.",
        interactions: "الأدوية التي تحتوي على الكالسيوم، مضادات التخثر، البروبينيسيد.",
        sideEffects: "ألم في موقع الحقن، طفح جلدي، غثيان، إسهال. نادراً: فقر الدم الانحلالي، نقص الصفيحات، اضطرابات في وظائف الكبد والكلى.",
        warnings: "يجب تجنب إعطائه مع محاليل تحتوي على الكالسيوم، خاصة للأطفال حديثي الولادة. يجب استخدامه بحذر في المرضى الذين لديهم تاريخ من فرط الحساسية للبنسلين.",
        clinicalPearls: "يتميز بنصف عمر طويل مما يسمح بإعطائه مرة واحدة يومياً. يتم إفرازه عن طريق الكلى والصفراء. يجب إذابته في الماء المقطر أو محلول كلوريد الصوديوم 0.9% وليس في محاليل تحتوي على الكالسيوم."
    },
    "fluoxetine": {
        name: "فلوكستين (Fluoxetine)",
        indications: "مضاد للاكتئاب من مجموعة مثبطات استرداد السيروتونين الانتقائية (SSRIs). يستخدم لعلاج الاكتئاب، اضطراب الوسواس القهري، اضطراب الهلع، اضطراب الشره المرضي العصابي، واضطراب ما قبل الدورة الشهرية.",
        dosage: "الاكتئاب: البدء بـ 20 ملغ يومياً، يمكن زيادتها تدريجياً حتى 80 ملغ يومياً حسب الاستجابة.",
        interactions: "مثبطات مونوأمين أوكسيديز (MAOIs)، الليثيوم، التريبتوفان، مضادات الذهان، مضادات الاكتئاب الأخرى، الترامادول، مضادات التخثر.",
        sideEffects: "غثيان، صداع، أرق، قلق، فقدان الشهية، جفاف الفم، تعرق، اضطرابات جنسية. نادراً: نزيف هضمي، متلازمة السيروتونين.",
        warnings: "يزيد من خطر الأفكار الانتحارية، خاصة عند بدء العلاج في المراهقين والشباب. يجب عدم استخدامه مع مثبطات MAOIs أو خلال 14 يوماً من التوقف عنها.",
        clinicalPearls: "يتميز بنصف عمر طويل (2-3 أيام للمستقلب النشط)، مما يقلل من أعراض الانسحاب. قد يستغرق 4-6 أسابيع للوصول إلى التأثير العلاجي الكامل. يمكن تناوله في أي وقت من اليوم."
    },
    "losartan": {
        name: "لوسارتان (Losartan)",
        indications: "حاصر لمستقبلات الأنجيوتنسين II. يستخدم لعلاج ارتفاع ضغط الدم، حماية الكلى في مرضى السكري من النوع 2 مع اعتلال الكلية، وتقليل خطر السكتة الدماغية في مرضى تضخم البطين الأيسر.",
        dosage: "ارتفاع ضغط الدم: البدء بـ 50 ملغ مرة واحدة يومياً، يمكن زيادتها إلى 100 ملغ يومياً. اعتلال الكلية السكري: 50-100 ملغ مرة واحدة يومياً.",
        interactions: "مكملات البوتاسيوم، مدرات البول الحافظة للبوتاسيوم، مثبطات ACE، مضادات الالتهاب غير الستيرويدية، الليثيوم.",
        sideEffects: "دوار، دوخة، سعال (أقل من مثبطات ACE)، ارتفاع مستوى البوتاسيوم. نادراً: فرط الحساسية، انخفاض ضغط الدم الشديد.",
        warnings: "يجب تجنب استخدامه أثناء الحمل (خاصة الثلث الثاني والثالث). يجب مراقبة وظائف الكلى ومستويات البوتاسيوم، خاصة في المرضى الذين يعانون من قصور كلوي.",
        clinicalPearls: "بديل جيد لمثبطات ACE في المرضى الذين يعانون من السعال. يتحول في الكبد إلى مستقلب نشط (EXP-3174). يمكن تناوله مع أو بدون طعام."
    },
    "simvastatin": {
        name: "سيمفاستاتين (Simvastatin)",
        indications: "خافض للكوليسترول من مجموعة الستاتينات. يستخدم للوقاية الأولية والثانوية من أمراض القلب والأوعية الدموية، وخفض مستويات الكوليسترول والدهون الثلاثية.",
        dosage: "البدء بـ 10-20 ملغ مرة واحدة يومياً في المساء، يمكن زيادتها كل 4 أسابيع حتى 40 ملغ يومياً.",
        interactions: "مضادات الفطريات الأزولية، الإريثروميسين، الكلاريثروميسين، مثبطات البروتياز، الفيراباميل، الأميودارون، الديلتيازيم، الجريب فروت، الفيبرات، السيكلوسبورين.",
        sideEffects: "آلام العضلات، ارتفاع إنزيمات الكبد، صداع، اضطرابات معوية. نادراً: انحلال الربيدات، التهاب الكبد.",
        warnings: "يجب مراقبة وظائف الكبد والعضلات. تجنب الاستخدام أثناء الحمل والرضاعة. الحد الأقصى للجرعة هو 20 ملغ يومياً عند استخدامه مع الأميودارون أو الفيراباميل أو الديلتيازيم.",
        clinicalPearls: "يجب تناوله في المساء لأن معظم تصنيع الكوليسترول يحدث ليلاً. تجنب عصير الجريب فروت أثناء العلاج. يبدأ مفعوله بعد أسبوعين ويصل للذروة بعد 4-6 أسابيع."
    },
    "metoprolol": {
        name: "ميتوبرولول (Metoprolol)",
        indications: "حاصر بيتا انتقائي. يستخدم لعلاج ارتفاع ضغط الدم، الذبحة الصدرية، احتشاء عضلة القلب، قصور القلب، واضطرابات نظم القلب.",
        dosage: "ارتفاع ضغط الدم: 100-400 ملغ يومياً مقسمة على 1-2 جرعة. قصور القلب: البدء بـ 12.5-25 ملغ مرتين يومياً، زيادة تدريجية كل أسبوعين.",
        interactions: "مثبطات قنوات الكالسيوم، الديجوكسين، الكلونيدين، مضادات الالتهاب غير الستيرويدية، مضادات الاكتئاب ثلاثية الحلقات، مضادات الهيستامين.",
        sideEffects: "تعب، دوخة، برودة في الأطراف، بطء القلب، انخفاض ضغط الدم، اضطرابات النوم. نادراً: تفاقم قصور القلب، تشنج القصبات الهوائية.",
        warnings: "يجب عدم التوقف المفاجئ عن تناوله. استخدام بحذر في مرضى الربو، مرض الانسداد الرئوي المزمن، داء السكري، أمراض الأوعية الطرفية.",
        clinicalPearls: "متوفر بصيغتين: الإطلاق الفوري (مرتين يومياً) والإطلاق الممتد (مرة واحدة يومياً). يجب تناول أقراص الإطلاق الممتد كاملة دون سحقها أو مضغها. يمكن أن يخفي أعراض نقص السكر في الدم في مرضى السكري."
    },
    "levothyroxine": {
        name: "ليفوثيروكسين (Levothyroxine)",
        indications: "هرمون الغدة الدرقية الاصطناعي. يستخدم لعلاج قصور الغدة الدرقية، تضخم الغدة الدرقية غير السام، والوقاية من تكرار سرطان الغدة الدرقية بعد الجراحة.",
        dosage: "البالغين: البدء بـ 25-50 ميكروغرام يومياً، زيادة تدريجية كل 4-6 أسابيع حسب مستويات TSH. كبار السن أو مرضى القلب: البدء بـ 12.5-25 ميكروغرام يومياً.",
        interactions: "أدوية الحديد، الكالسيوم، مضادات الحموضة، الكوليستيرامين، الوارفارين، الديجوكسين، مضادات الاكتئاب ثلاثية الحلقات.",
        sideEffects: "عند الجرعة المناسبة، قليلة. الجرعة الزائدة قد تسبب: تسرع القلب، خفقان، أرق، قلق، رعشة، فقدان الوزن، إسهال.",
        warnings: "يجب مراقبة مستويات هرمونات الغدة الدرقية بانتظام. استخدام بحذر في مرضى أمراض القلب، كبار السن. تعديل الجرعة قد يكون ضرورياً أثناء الحمل.",
        clinicalPearls: "يجب تناوله على معدة فارغة، 30-60 دقيقة قبل الإفطار. الامتصاص يتأثر بالعديد من الأدوية والأطعمة، لذا يفضل تناوله بمفرده. قد يستغرق 4-8 أسابيع للوصول إلى التأثير العلاجي الكامل."
    },
    "albuterol": {
        name: "ألبوتيرول (Albuterol/Salbutamol)",
        indications: "موسع للشعب الهوائية من مجموعة محفزات بيتا-2. يستخدم لعلاج وتخفيف أعراض الربو، مرض الانسداد الرئوي المزمن (COPD)، ومنع تشنج القصبات الناجم عن التمارين.",
        dosage: "بخاخ الاستنشاق: 1-2 بخة (90-180 ميكروغرام) كل 4-6 ساعات حسب الحاجة. محلول الاستنشاق: 2.5-5 ملغ كل 4-6 ساعات.",
        interactions: "حاصرات بيتا غير الانتقائية، مدرات البول، الديجوكسين، مضادات الاكتئاب ثلاثية الحلقات، مثبطات مونوأمين أوكسيديز.",
        sideEffects: "رعشة، تسرع القلب، توتر عصبي، صداع، انخفاض بوتاسيوم الدم، جفاف الفم.",
        warnings: "استخدام بحذر في مرضى أمراض القلب، ارتفاع ضغط الدم، فرط نشاط الغدة الدرقية، داء السكري. الاستخدام المفرط قد يؤدي إلى تقليل فعاليته وزيادة الآثار الجانبية.",
        clinicalPearls: "يبدأ مفعوله خلال 5 دقائق ويستمر لمدة 4-6 ساعات. استخدام غرفة الاستنشاق (spacer) مع البخاخ يحسن وصول الدواء للرئتين ويقلل من الآثار الجانبية."
    },
    "montelukast": {
        name: "مونتيلوكاست (Montelukast)",
        indications: "مضاد لمستقبلات الليكوترين. يستخدم للوقاية والعلاج طويل الأمد للربو، تخفيف أعراض الحساسية الموسمية، والوقاية من تشنج القصبات الناجم عن التمارين.",
        dosage: "البالغين والمراهقين فوق 15 سنة: 10 ملغ مرة واحدة يومياً في المساء. الأطفال 6-14 سنة: 5 ملغ مرة واحدة يومياً. الأطفال 2-5 سنوات: 4 ملغ مرة واحدة يومياً.",
        interactions: "قليلة نسبياً. الفينوباربيتال، الريفامبين، الفينيتوين قد تقلل من تركيزه في الدم.",
        sideEffects: "صداع، اضطرابات هضمية، عدوى الجهاز التنفسي العلوي. نادراً: اضطرابات نفسية (اكتئاب، قلق، أفكار انتحارية)، تفاعلات فرط الحساسية.",
        warnings: "قد يسبب اضطرابات نفسية وسلوكية. يجب مراقبة المرضى لأي تغيرات في السلوك أو المزاج. ليس مناسباً لعلاج نوبات الربو الحادة.",
        clinicalPearls: "يمكن تناوله مع أو بدون طعام. لا يحل محل الستيرويدات المستنشقة في علاج الربو، بل يستخدم كعلاج إضافي. قد يستغرق عدة أيام للوصول إلى التأثير العلاجي الكامل."
    }
};

// English translations for the additional drugs
const additionalDrugsEN = {
    "ciprofloxacin": {
        name: "Ciprofloxacin",
        indications: "Fluoroquinolone antibiotic. Used for urinary tract infections, respiratory infections, skin and soft tissue infections, bone and joint infections, and gastrointestinal infections.",
        dosage: "Adults: 250-750 mg twice daily depending on infection severity. Treatment duration ranges from 3-14 days depending on infection type.",
        interactions: "Medications containing aluminum, magnesium, or calcium, iron, zinc, sucralfate, theophylline, warfarin, anticonvulsants.",
        sideEffects: "Nausea, diarrhea, headache, dizziness, rash, changes in liver function. Rarely: tendon inflammation or rupture, neurological disorders, hypersensitivity.",
        warnings: "Avoid use in children and adolescents, pregnant and breastfeeding women. Increases risk of tendon rupture, especially in the elderly. Drink plenty of water during treatment.",
        clinicalPearls: "Should be taken 2 hours before or after aluminum/magnesium/calcium products. Can cause photosensitivity, so avoid direct sunlight exposure."
    },
    "azithromycin": {
        name: "Azithromycin",
        indications: "Macrolide antibiotic. Used for respiratory infections, ear infections, skin and soft tissue infections, and sexually transmitted diseases.",
        dosage: "Adults: 500 mg on day 1, then 250 mg daily for 4 days. Or 500 mg daily for 3 days. Children: 10 mg/kg on day 1, then 5 mg/kg daily for 4 days.",
        interactions: "QT-prolonging medications, statins, warfarin, digoxin, cyclosporine.",
        sideEffects: "Nausea, diarrhea, abdominal pain, headache. Rarely: liver function disorders, allergic reactions, cardiac rhythm disorders.",
        warnings: "Use with caution in patients with heart or liver problems. May prolong QT interval, increasing risk of cardiac arrhythmias.",
        clinicalPearls: "Can be taken with or without food. Has a long half-life allowing for short dosing regimens. Concentrates well in tissues making it effective against many types of infections."
    },
    "levothyroxine": {
        name: "Levothyroxine",
        indications: "Synthetic thyroid hormone. Used for hypothyroidism, non-toxic goiter, and prevention of thyroid cancer recurrence after surgery.",
        dosage: "Adults: Start with 25-50 mcg daily, gradually increase every 4-6 weeks based on TSH levels. Elderly or cardiac patients: Start with 12.5-25 mcg daily.",
        interactions: "Iron medications, calcium, antacids, cholestyramine, warfarin, digoxin, tricyclic antidepressants.",
        sideEffects: "Few at appropriate dosage. Overdose may cause: tachycardia, palpitations, insomnia, anxiety, tremor, weight loss, diarrhea.",
        warnings: "Thyroid hormone levels should be monitored regularly. Use with caution in patients with heart disease, elderly. Dose adjustment may be necessary during pregnancy.",
        clinicalPearls: "Should be taken on an empty stomach, 30-60 minutes before breakfast. Absorption is affected by many medications and foods, so it's best taken alone. May take 4-8 weeks to reach full therapeutic effect."
    },
    "losartan": {
        name: "Losartan",
        indications: "Angiotensin II receptor blocker. Used for hypertension, kidney protection in type 2 diabetes with nephropathy, and reducing stroke risk in patients with left ventricular hypertrophy.",
        dosage: "Hypertension: Start with 50 mg once daily, can be increased to 100 mg daily. Diabetic nephropathy: 50-100 mg once daily.",
        interactions: "Potassium supplements, potassium-sparing diuretics, ACE inhibitors, NSAIDs, lithium.",
        sideEffects: "Dizziness, vertigo, cough (less than ACE inhibitors), hyperkalemia. Rarely: hypersensitivity, severe hypotension.",
        warnings: "Avoid during pregnancy (especially 2nd and 3rd trimesters). Monitor renal function and potassium levels, especially in patients with renal impairment.",
        clinicalPearls: "Good alternative to ACE inhibitors in patients with cough. Converted in the liver to active metabolite (EXP-3174). Can be taken with or without food."
    },
    "albuterol": {
        name: "Albuterol (Salbutamol)",
        indications: "Beta-2 agonist bronchodilator. Used for treatment and relief of asthma symptoms, chronic obstructive pulmonary disease (COPD), and prevention of exercise-induced bronchospasm.",
        dosage: "Inhalation aerosol: 1-2 puffs (90-180 mcg) every 4-6 hours as needed. Inhalation solution: 2.5-5 mg every 4-6 hours.",
        interactions: "Non-selective beta-blockers, diuretics, digoxin, tricyclic antidepressants, monoamine oxidase inhibitors.",
        sideEffects: "Tremor, tachycardia, nervousness, headache, hypokalemia, dry mouth.",
        warnings: "Use with caution in patients with heart disease, hypertension, hyperthyroidism, diabetes. Excessive use may lead to decreased effectiveness and increased side effects.",
        clinicalPearls: "Effect begins within 5 minutes and lasts for 4-6 hours. Using a spacer with the inhaler improves lung delivery and reduces side effects."
    },
    "montelukast": {
        name: "Montelukast",
        indications: "Leukotriene receptor antagonist. Used for prevention and long-term treatment of asthma, relief of seasonal allergic rhinitis symptoms, and prevention of exercise-induced bronchospasm.",
        dosage: "Adults and adolescents over 15 years: 10 mg once daily in the evening. Children 6-14 years: 5 mg once daily. Children 2-5 years: 4 mg once daily.",
        interactions: "Relatively few. Phenobarbital, rifampin, phenytoin may reduce its concentration in blood.",
        sideEffects: "Headache, digestive disorders, upper respiratory tract infection. Rarely: psychiatric disorders (depression, anxiety, suicidal thoughts), hypersensitivity reactions.",
        warnings: "May cause psychiatric and behavioral disorders. Patients should be monitored for any changes in behavior or mood. Not suitable for treatment of acute asthma attacks.",
        clinicalPearls: "Can be taken with or without food. Does not replace inhaled corticosteroids in asthma treatment but is used as add-on therapy. May take several days to reach full therapeutic effect."
    }
};
