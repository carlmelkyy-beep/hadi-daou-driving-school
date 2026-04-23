const allQuestions = [

  {
    type: "normal",
    id: 1,
    category: "private_car",
    question: {
      ar: "عند دخولك نفق أثناء القيادة نهاراً عليك:",
      fr: "En entrant dans un tunnel pendant la journée, vous devez:",
      en: "When entering a tunnel during daytime, you should:"
    },
    options: {
      ar: ["تشغيل أضواء التلاقي وزيادة السرعة", "تشغيل أضواء التلاقي", "استعمال الزمور"],
      fr: ["Allumer les feux de croisement et augmenter la vitesse", "Allumer les feux de croisement", "Utiliser le klaxon"],
      en: ["Turn on low beam lights and increase speed", "Turn on low beam lights", "Use the horn"]
    },
    correct: 1
  },

  {
    type: "normal",
    id: 2,
    category: "private_car",
    question: {
      ar: "عند قيادتك لمركبة أثناء الليل خلف مركبة أخرى عليك:",
      fr: "Lorsque vous conduisez la nuit derrière un véhicule, vous devez:",
      en: "When driving at night behind another vehicle, you should:"
    },
    options: {
      ar: ["تشغيل أضواء التلاقي", "عدم استعمال الضوء", "استعمال الضوء العالي"],
      fr: ["Allumer les feux de croisement", "Ne pas utiliser les lumières", "Utiliser les feux de route"],
      en: ["Use low beam lights", "Do not use lights", "Use high beam lights"]
    },
    correct: 2
  },

  {
    type: "normal",
    id: 3,
    category: "private_car",
    question: {
      ar: "في حال ظهور مركبة من الجهة المعاكسة أثناء استعمالك للإضاءة العالية ليلاً عليك:",
      fr: "Si un véhicule arrive en sens inverse lorsque vous utilisez les feux de route, vous devez:",
      en: "If an oncoming vehicle appears while using high beams, you should:"
    },
    options: {
      ar: ["إطفاء الضوء نهائياً", "تبديل الضوء بين العالي والمنخفض", "الانتقال إلى الضوء المنخفض"],
      fr: ["Éteindre complètement les feux", "Alterner entre feux de route et croisement", "Passer aux feux de croisement"],
      en: ["Turn off lights completely", "Switch between high and low beams", "Switch to low beam"]
    },
    correct: 2
  },

  {
    type: "normal",
    id: 4,
    category: "private_car",
    question: {
      ar: "عند تعبئة خزان مركبتك بالوقود، عليك:",
      fr: "Lors du remplissage du réservoir de carburant, vous devez:",
      en: "When refueling your vehicle, you should:"
    },
    options: {
      ar: ["عدم الاهتمام لأن الأمر غير خطر", "إبقاء المحرك شغالاً", "إطفاء محرك المركبة"],
      fr: ["Ne pas s’en soucier", "Laisser le moteur allumé", "Éteindre le moteur"],
      en: ["Ignore it", "Keep engine running", "Turn off engine"]
    },
    correct: 2
  },

  {
    type: "normal",
    id: 5,
    category: "private_car",
    question: {
      ar: "عندما تتحول الإشارة من الأخضر إلى الأصفر أثناء عبورك، عليك:",
      fr: "Quand le feu passe du vert au jaune pendant le passage, vous devez:",
      en: "When light turns yellow while crossing, you should:"
    },
    options: {
      ar: ["التوقف فوراً", "متابعة السير بحذر", "الرجوع للخلف"],
      fr: ["S’arrêter immédiatement", "Continuer avec prudence", "Reculer"],
      en: ["Stop immediately", "Continue carefully", "Go backwards"]
    },
    correct: 1
  },

  {
    type: "normal",
    id: 6,
    category: "private_car",
    question: {
      ar: "عند شعورك بالنعاس أثناء القيادة، عليك:",
      fr: "Si vous ressentez de la somnolence en conduisant, vous devez:",
      en: "If you feel sleepy while driving, you should:"
    },
    options: {
      ar: ["متابعة القيادة", "أخذ أدوية منشطة", "التوقف وأخذ قسط من الراحة"],
      fr: ["Continuer", "Prendre stimulants", "S’arrêter et se reposer"],
      en: ["Keep driving", "Take stimulants", "Stop and rest"]
    },
    correct: 2
  },

  {
    type: "normal",
    id: 7,
    category: "private_car",
    question: {
      ar: "عند وجود شرطي وإشارة ضوئية، عليك الالتزام بـ:",
      fr: "En présence d’un agent et d’un feu, vous devez suivre:",
      en: "When police and traffic light exist, follow:"
    },
    options: {
      ar: ["الإشارة الضوئية", "الإشارة الثابتة", "تعليمات الشرطي"],
      fr: ["Le feu", "Le panneau", "Les instructions de l’agent"],
      en: ["Traffic light", "Road sign", "Police instructions"]
    },
    correct: 2
  },

  {
    type: "normal",
    id: 8,
    category: "private_car",
    question: {
      ar: "عند جلوس السائق خلف المقود يجب:",
      fr: "En s’asseyant au volant, le conducteur doit:",
      en: "When sitting behind wheel, driver must:"
    },
    options: {
      ar: ["ربط الحزام ثم تعديل", "تعديل ثم الحزام", "تعديل ثم ربط الحزام"],
      fr: ["Ceinture puis ajuster", "Ajuster puis ceinture", "Ajuster puis ceinture"],
      en: ["Belt then adjust", "Adjust then belt", "Adjust then belt"]
    },
    correct: 2
  },

  {
    type: "normal",
    id: 9,
    category: "private_car",
    question: {
      ar: "قبل الانطلاق بالمركبة لأول مرة، على السائق أن:",
      fr: "Avant de démarrer pour la première fois, le conducteur doit:",
      en: "Before starting the vehicle for the first time, the driver should:"
    },
    options: {
      ar: ["فحص أنظمة المركبة", "عدم الفحص", "الاستماع للراديو"],
      fr: ["Vérifier les systèmes", "Ne pas vérifier", "Écouter la radio"],
      en: ["Check systems", "Do not check", "Listen to radio"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 10,
    category: "private_car",
    question: {
      ar: "أثناء القيادة يمكن للسائق:",
      fr: "Pendant la conduite, le conducteur peut:",
      en: "While driving, the driver can:"
    },
    options: {
      ar: ["قراءة الصحيفة", "استعمال الهاتف", "الاستماع للراديو بصوت منخفض"],
      fr: ["Lire journal", "Utiliser téléphone", "Radio faible"],
      en: ["Read newspaper", "Use phone", "Listen low radio"]
    },
    correct: 2
  },

  {
    type: "normal",
    id: 11,
    category: "private_car",
    question: {
      ar: "يجب ربط حزام الأمان:",
      fr: "La ceinture doit être attachée:",
      en: "Seatbelt must be worn:"
    },
    options: {
      ar: ["قبل الانطلاق", "بعد دقيقة", "بعد تشغيل المحرك"],
      fr: ["Avant départ", "Après 1 min", "Après démarrage"],
      en: ["Before moving", "After 1 min", "After engine start"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 12,
    category: "private_car",
    question: {
      ar: "الهدف من مسند الرأس هو:",
      fr: "Le rôle de l’appui-tête est:",
      en: "Headrest purpose is:"
    },
    options: {
      ar: ["راحة الرأس", "منع كسر الرقبة", "وسادة للنوم"],
      fr: ["Confort", "Protéger cou", "Oreiller"],
      en: ["Comfort", "Prevent neck injury", "Pillow"]
    },
    correct: 1
  },

  {
    type: "normal",
    id: 13,
    category: "private_car",
    question: {
      ar: "تنخفض قدرة السائق بسبب:",
      fr: "La capacité du conducteur diminue à cause de:",
      en: "Driver ability decreases due to:"
    },
    options: {
      ar: ["النشاط", "الإرهاق والنعاس", "القيادة داخل المدينة"],
      fr: ["Activité", "Fatigue", "Ville"],
      en: ["Activity", "Fatigue", "City driving"]
    },
    correct: 1
  },

  {
    type: "normal",
    id: 14,
    category: "private_car",
    question: {
      ar: "استعمال الهاتف أثناء القيادة:",
      fr: "Utiliser téléphone en conduisant:",
      en: "Using phone while driving:"
    },
    options: {
      ar: ["مفيد", "مضر", "لا تأثير"],
      fr: ["Utile", "Négatif", "Aucun effet"],
      en: ["Helpful", "Harmful", "No effect"]
    },
    correct: 1
  },

  {
    type: "normal",
    id: 15,
    category: "private_car",
    question: {
      ar: "أفضل نصيحة للسائق تحت تأثير الكحول:",
      fr: "Meilleur conseil sous alcool:",
      en: "Best advice under alcohol:"
    },
    options: {
      ar: ["يقود ببطء", "لا يقود", "يقود بحذر"],
      fr: ["Lent", "Ne pas conduire", "Prudent"],
      en: ["Drive slow", "Do not drive", "Drive carefully"]
    },
    correct: 1
  },

  {
    type: "normal",
    id: 16,
    category: "private_car",
    question: {
      ar: "إن القيادة تحت تأثير الأدوية المنومة تكون:",
      fr: "Conduire sous l’influence des médicaments est:",
      en: "Driving under the influence of sleeping medication is:"
    },
    options: {
      ar: ["أقل تعباً", "غير خطيرة", "خطيرة"],
      fr: ["Moins pénible", "Sans danger", "Dangereux"],
      en: ["Delightful", "Not dangerous", "Dangerous"]
    },
    correct: 2
  },

  {
    type: "normal",
    id: 17,
    category: "private_car",
    question: {
      ar: "إذا علقت دواسة الوقود أثناء القيادة، عليك فوراً أن:",
      fr: "Quand la pédale de l'accélérateur est bloquée, tu dois:",
      en: "If the gas pedal gets stuck while driving, the driver should immediately:"
    },
    options: {
      ar: ["تشد فرامل اليد", "تصغّر ترس السرعة", "تضع الترس على الحيادي وتطفئ المحرك وتتوقف على جانب الطريق"],
      fr: ["Tirer le frein à main", "Changer vers une vitesse plus petite", "Mettre le levier au neutre, arrêter le moteur et s'arrêter au bord de la route"],
      en: ["Pull the handbrake up", "Change to a lower gear", "Put the gear on neutral, turn off the engine and stop on the side of the road"]
    },
    correct: 2
  },

  {
    type: "normal",
    id: 18,
    category: "private_car",
    question: {
      ar: "إذا انفتح غطاء المحرك فجأة أثناء سير المركبة، عليك فوراً أن:",
      fr: "Si le capot du moteur s'ouvre de lui-même lorsque vous roulez sur la route, vous devez immédiatement:",
      en: "If the car hood accidentally releases while driving down the road, you should immediately:"
    },
    options: {
      ar: ["تزيد سرعتك قليلاً", "تخفف السرعة تدريجياً لتوقف المركبة إلى جانب الطريق", "تضغط على الفرامل بشدة"],
      fr: ["Accélérer un petit peu", "Décélérer graduellement pour vous arrêter du côté de la route", "Appuyer fortement sur la pédale de frein"],
      en: ["Increase your speed a little", "Reduce your speed gradually and pull to the side of the road", "Press firmly on the brakes"]
    },
    correct: 1
  },

  {
    type: "normal",
    id: 19,
    category: "private_car",
    question: {
      ar: "في حال المطر الشديد، وكي يتفادى السائق الماهر التأخر، يجب عليه أن يبدأ رحلته:",
      fr: "Pour éviter d'être en retard quand il pleut, le conducteur doit:",
      en: "To avoid being late during heavy rain, the driver should:"
    },
    options: {
      ar: ["في وقت متأخر عن المعتاد", "في وقت أبكر من المعتاد", "متفائلاً بالخير"],
      fr: ["Prendre la route un peu plus tard que d'habitude", "Prendre la route un peu plus tôt que d'habitude", "Prendre la route de bonne humeur"],
      en: ["Leave a bit later than usual", "Leave a bit earlier than usual", "Start the trip in a good mood"]
    },
    correct: 1
  },

  {
    type: "normal",
    id: 20,
    category: "private_car",
    question: {
      ar: "قبل أن يصعد السائق إلى مركبته عليه أولاً أن:",
      fr: "Avant de prendre le véhicule, le conducteur doit:",
      en: "Before getting into the vehicle, the driver should:"
    },
    options: {
      ar: ["يتأكد أن لديه وقت كاف", "ينظر تحت المركبة ويدور حولها", "يربط حزام الأمان"],
      fr: ["Vérifier qu'il a assez de temps", "Faire le tour du véhicule", "Porter la ceinture de sécurité"],
      en: ["Make sure he has enough time", "Walk around the vehicle", "Wear the seat belt"]
    },
    correct: 1
  },

  {
    type: "normal",
    id: 21,
    category: "private_car",
    question: {
      ar: "يجب على سائق المركبة، أثناء القيادة على طرقات مزدحمة، أن يأخذ لمحة سريعة على المرايا مرة كل:",
      fr: "Lors d'un embouteillage, le conducteur doit vérifier ses rétroviseurs chaque:",
      en: "In heavy traffic, the driver should check the mirrors every:"
    },
    options: {
      ar: ["45 ثانية", "30 ثانية", "4 إلى 8 ثوان"],
      fr: ["45 secondes", "30 secondes", "4 à 8 secondes"],
      en: ["45 seconds", "30 seconds", "4 to 8 seconds"]
    },
    correct: 2
  },

  {
    type: "normal",
    id: 22,
    category: "private_car",
    question: {
      ar: "إذا أراد السائق أن ينعطف بمركبته إلى جهة اليمين، عليه قبل الانعطاف أن ينظر في:",
      fr: "Avant de virer vers la droite, le conducteur doit jeter un coup d'oeil sur:",
      en: "Before turning right, the driver should look at:"
    },
    options: {
      ar: ["المرآة اليسرى فقط", "المرآة اليمنى فقط", "كل المرايا وخاصة المرآة اليمنى والبقعة العمياء"],
      fr: ["Le rétroviseur extérieur gauche uniquement", "Le rétroviseur extérieur droit uniquement", "Tous les miroirs, surtout le rétroviseur droit et les angles morts"],
      en: ["Left mirror only", "Right mirror only", "All mirrors, especially the right mirror and blind spot"]
    },
    correct: 2
  },

  {
    type: "normal",
    id: 23,
    category: "private_car",
    question: {
      ar: "الخطر الأكبر الذي تشكله المركبات المتوقفة إلى جانب الرصيف الأيمن على السائق المار بقربها هو:",
      fr: "Le plus grand danger que les véhicules garés sur la chaussée droite de la route posent sur les véhicules qui les croisent est caractérisé par:",
      en: "The greatest danger from vehicles parked on the right side of the road is:"
    },
    options: {
      ar: ["خروج المشاة وخاصة الأطفال من بين المركبات المتوقفة", "رمي النفايات منها", "ارتفاع صوت الراديو منها"],
      fr: ["Les piétons, surtout les enfants, qui pourraient surgir d'entre ces véhicules", "Les déchets jetés de ces véhicules", "Le volume de leur radio"],
      en: ["Pedestrians, especially children, suddenly coming out from between them", "Trash thrown from them", "Their loud radio volume"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 24,
    category: "private_car",
    question: {
      ar: "الخطر الذي تشكله المركبات المتوقفة إلى جانب الرصيف الأيمن على السائق المار بقربها هو:",
      fr: "Le danger que les véhicules garés sur la chaussée droite de la route posent sur les véhicules qui les croisent est caractérisé par:",
      en: "The danger from vehicles parked on the right side of the road is:"
    },
    options: {
      ar: ["إصدارها صوت جهاز إنذار السرقة", "فتح صندوق الأمتعة", "احتمال انطلاق إحداها ودخولها السير فجأة"],
      fr: ["Les sons émis par les systèmes antivol", "La porte du coffre qu'on peut ouvrir", "Le fait qu'un de ces véhicules pourrait démarrer et joindre la circulation à tout moment"],
      en: ["Sounds from alarm systems", "The trunk being opened", "One of them may suddenly move and enter traffic"]
    },
    correct: 2
  },

  {
    type: "normal",
    id: 25,
    category: "private_car",
    question: {
      ar: "كسائق وقائي عليك أن:",
      fr: "En tant que conducteur préventif, tu dois:",
      en: "As a defensive driver, you should:"
    },
    options: {
      ar: ["تأخذ أفضليتك بالمرور عنوة لأنها من حقك", "تتنازل عن أفضليتك بالمرور منعاً للحادث", "لا تتنازل عن أفضليتك بالمرور"],
      fr: ["Insister sur la priorité de passage si elle te revient", "Céder la priorité de passage pour éviter un accident", "Ne jamais céder la priorité de passage"],
      en: ["Insist on your right of way", "Give up your right of way to avoid an accident", "Never give up your right of way"]
    },
    correct: 1
  },

  {
    type: "normal",
    id: 26,
    category: "private_car",
    question: {
      ar: "أثناء القيادة، وقبل استعمالك للفرامل، عليك أولاً أن تنظر:",
      fr: "Avant de freiner, vous devez regarder:",
      en: "Before braking, you should look:"
    },
    options: {
      ar: ["إلى يمينك", "إلى يسارك", "في المرايا وخاصة المرآة الداخلية"],
      fr: ["À droite", "À gauche", "Dans le rétroviseur intérieur"],
      en: ["To your right", "To your left", "In the mirrors, especially the inside rearview mirror"]
    },
    correct: 2
  },

  {
    type: "normal",
    id: 27,
    category: "private_car",
    question: {
      ar: "إن نظام منع انغلاق الفرامل (ABS) في المركبات الحديثة في حالة الفرملة الشديدة:",
      fr: "En cas de freinage bien appuyé, le système ABS des véhicules modernes:",
      en: "During hard braking, the ABS system in modern vehicles:"
    },
    options: {
      ar: ["ليس من الطبيعي أن يصدر ضوضاء أو يسبب ارتجاجاً في دواسة الفرامل", "من الطبيعي أن يصدر ضوضاء وأن يسبب ارتجاجاً في دواسة الفرامل", "من الطبيعي أن يسبب ارتجاجاً في دواسة الفرامل فقط"],
      fr: ["Ne doit causer ni bruit ni vibration de la pédale de frein", "Peut causer un bruit et une vibration de la pédale de freins", "Peut causer une vibration de la pédale de freins uniquement"],
      en: ["Should not cause noise or pedal vibration", "May cause noise and brake pedal vibration", "May cause brake pedal vibration only"]
    },
    correct: 1
  },

  {
    type: "normal",
    id: 28,
    category: "private_car",
    question: {
      ar: "من حسنات نظام منع انغلاق الفرامل (ABS) في المركبات الحديثة، في حالة الفرملة الشديدة، أنه:",
      fr: "En cas de freinage bien appuyé, le système ABS dans les véhicules modernes:",
      en: "One advantage of ABS in modern vehicles during hard braking is that it:"
    },
    options: {
      ar: ["يمنع انغلاق الفرامل، ويمكن السائق من توجيه المركبة", "يمنع انغلاق الفرامل فقط", "لا يمنع انغلاق الفرامل ولا يمكن السائق من توجيه المركبة"],
      fr: ["Empêche le blocage des freins et permet au conducteur de maintenir le contrôle de son véhicule", "Empêche le blocage des freins uniquement", "N'empêche pas le blocage des freins et ne permet pas au conducteur de maintenir le contrôle"],
      en: ["Prevents wheel lock and lets the driver keep control of the vehicle", "Prevents wheel lock only", "Does not prevent lock and does not let the driver keep control"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 29,
    category: "private_car",
    question: {
      ar: "عند تعرض مركبتك للانزلاق، عليك، وبسرعة بديهة، أن:",
      fr: "En cas de dérapage, vous devez:",
      en: "If your vehicle skids, you should:"
    },
    options: {
      ar: ["تضغط الفرامل وتوجه مركبتك بعكس اتجاه مؤخرتها", "ترفع قدمك عن دواسة الوقود ولا تضغط على الفرامل، وأن توجه المركبة إلى الجهة التي تنزلق بها", "تزيد السرعة"],
      fr: ["Freiner et diriger votre véhicule dans le sens opposé au dérapage", "Retirer le pied de l'accélérateur sans appuyer sur le frein et diriger le véhicule dans le sens du dérapage", "Augmenter votre vitesse"],
      en: ["Brake and steer opposite the skid", "Lift your foot off the accelerator, avoid braking, and steer in the direction of the skid", "Increase speed"]
    },
    correct: 1
  },

  {
    type: "normal",
    id: 30,
    category: "private_car",
    question: {
      ar: "إن تركك لمسافة أمان بين مركبتك والمركبة التي أمامك أثناء السير يمكنّك من:",
      fr: "Le conducteur doit laisser un espace de sécurité entre son véhicule et le véhicule devant lui pour:",
      en: "Leaving a safety distance between your vehicle and the one ahead allows you to:"
    },
    options: {
      ar: ["تفادي اصطدامك بها في حال توقفت فجأة", "التمتع بالمناظر الخلابة حولك", "قراءة لوحة تسجيل تلك المركبة"],
      fr: ["Éviter la collision avec ce véhicule au cas où il s'arrête soudainement", "Profiter des vues fabuleuses autour", "Lire le numéro sur la plaque d'immatriculation arrière"],
      en: ["Avoid colliding with it if it stops suddenly", "Enjoy the scenery around you", "Read its rear plate number"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 31,
    category: "private_car",
    question: {
      ar: "لحظة انطلاق المركبة التي أمامك مباشرة عند تحول ضوء إشارة المرور من اللون الأحمر إلى اللون الأخضر عليك أن:",
      fr: "Le véhicule devant vous se lance immédiatement lorsque le feu rouge tourne au vert, dans ce cas vous devez:",
      en: "If the vehicle in front of you starts moving immediately when the traffic light turns green, you should:"
    },
    options: {
      ar: ["تنطلق فوراً بمركبتك خلفها وبسرعة", "تتأكد من خلو الطريق ثم تزمر", "تنطلق بمركبتك"],
      fr: ["Vous lancer immédiatement derrière ce véhicule", "Klaxonner", "Attendre deux secondes avant de démarrer"],
      en: ["Move immediately behind it", "Honk", "Wait two seconds before starting"]
    },
    correct: 2
  },

  {
    type: "normal",
    id: 32,
    category: "private_car",
    question: {
      ar: "عندما تقترب بمركبتك من إشارة مرور ضوئية تصدر ضوءاً واحداً أصفر متقطعاً، يجب عليك أن:",
      fr: "Lorsque vous vous approchez d’une intersection où un feu orange clignote, vous devez:",
      en: "When approaching an intersection with a flashing yellow light, you must:"
    },
    options: {
      ar: ["تربط حزام الأمان", "تتوقف", "تعطي الأفضلية"],
      fr: ["Porter la ceinture de sécurité", "Vous arrêter", "Céder la priorité"],
      en: ["Fasten your seat belt", "Stop", "Yield the right of way"]
    },
    correct: 2
  },

  {
    type: "normal",
    id: 33,
    category: "private_car",
    question: {
      ar: "إن وضع حزام الأمان الأمامي ضروري لـ:",
      fr: "Le port de la ceinture de sécurité avant est obligatoire pour:",
      en: "Wearing the front seat belt is mandatory for:"
    },
    options: {
      ar: ["جميع ركاب السيارة", "الراكب فقط", "غير ضروري بالمطلق"],
      fr: ["Tous les occupants de la voiture", "Le passager uniquement", "Pas obligatoire du tout"],
      en: ["All car occupants", "The passenger only", "Not required at all"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 34,
    category: "private_car",
    question: {
      ar: "في حال حصول تعطل في السيارة وأنت تسير بها على الطريق العام، عليك أن:",
      fr: "En cas de panne de voiture sur la voie publique, vous devez:",
      en: "If your car breaks down while driving on a public road, you should:"
    },
    options: {
      ar: ["تغادر الطريق العام عند أقرب مسافة", "تتابع السير إلى المكان الذي تقصد", "توقف السيارة فوراً حيث أنت"],
      fr: ["Quitter la route publique dès que possible", "Continuer jusqu’au lieu visé", "Arrêter la voiture immédiatement là où vous êtes"],
      en: ["Leave the public road as soon as possible", "Continue driving to your destination", "Stop immediately where you are"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 35,
    category: "private_car",
    question: {
      ar: "يحب على السائق أن يمسك بالمقود:",
      fr: "Le conducteur doit tenir le volant:",
      en: "The driver should hold the steering wheel:"
    },
    options: {
      ar: ["بيد واحدة", "بكلتا اليدين", "بأصابع اليدين"],
      fr: ["D’une seule main", "Avec les deux mains", "Du bout des doigts"],
      en: ["With one hand", "With both hands", "With the fingertips"]
    },
    correct: 1
  },

  



  
  

  {
    type: "normal",
    id: 50,
    category: "private_car",
    question: {
      ar: "للسيطرة على المركبة في المنحدر:",
      fr: "Pour contrôler en descente:",
      en: "To control vehicle downhill:"
    },
    options: {
      ar: ["ترس منخفض", "فرامل اليد", "الفرامل فقط"],
      fr: ["Vitesse basse", "Frein à main", "Frein seul"],
      en: ["Low gear", "Handbrake", "Brake only"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 51,
    category: "private_car",
    question: {
      ar: "استعمال الفرامل بشكل متواصل يؤدي إلى:",
      fr: "Frein continu cause:",
      en: "Continuous braking causes:"
    },
    options: {
      ar: ["قوة المنحدر", "ضغط السائل", "ارتفاع الحرارة"],
      fr: ["Pente", "Pression", "Chaleur"],
      en: ["Slope", "Pressure", "Heat"]
    },
    correct: 2
  },





{
  type: "normal",
  id: 57,
  category: "private_car",
  question: {
    ar: "التواصل عن طريق التقاء النظر عند التقاطع:",
    fr: "Le contact visuel au carrefour:",
    en: "Eye contact at the intersection:"
  },
  options: {
    ar: ["يساعد على حل الالتباس بين السائقين", "هو نوع من التنبه", "هو للتعارف بين السائقين"],
    fr: ["Aide les conducteurs à éviter les malentendus", "Est une sorte d’alerte", "Est un moyen de faire connaissance"],
    en: ["Helps drivers avoid misunderstandings", "Is a sort of alert", "Is a forum for drivers to get to know one another"]
  },
  correct: 0
},
{
  type: "normal",
  id: 58,
  category: "private_car",
  question: {
    ar: "لمنع الحوادث، على السائق أن يتفادى قدر المستطاع:",
    fr: "Comme règle de sécurité et chaque fois que possible, le conducteur doit éviter:",
    en: "As a safety driving rule and whenever possible, the driver should avoid:"
  },
  options: {
    ar: ["الرجوع بالمركبة إلى الخلف", "التوقف التدريجي", "غسل المركبة كثيراً"],
    fr: ["La marche arrière", "Le ralentissement progressif", "Laver fréquemment le véhicule"],
    en: ["Reversing", "Slowing down gradually", "Washing his vehicle frequently"]
  },
  correct: 0
},
{
  type: "normal",
  id: 59,
  category: "private_car",
  question: {
    ar: "يلزمك القانون بإعطاء الأفضلية لـ:",
    fr: "Selon la loi, le conducteur doit céder la priorité à:",
    en: "By law, the driver should yield the right of way to:"
  },
  options: {
    ar: ["المركبات المسرعة", "حافلات المدارس المستخدمة لأضواء التحذير", "المركبات البطيئة"],
    fr: ["Les véhicules en excès de vitesse", "Les bus scolaires qui utilisent leurs feux d’avertissement", "Les véhicules lents"],
    en: ["Speeding vehicles", "School buses flashing their warning lights", "Slow vehicles"]
  },
  correct: 1
},
{
  type: "normal",
  id: 60,
  category: "private_car",
  question: {
    ar: "يلزم القانون السائق بإعطاء الأفضلية لـ:",
    fr: "Selon la loi, le conducteur doit céder la priorité à:",
    en: "By law, the driver should yield the right of way to:"
  },
  options: {
    ar: ["المركبات الموجودة داخل المستديرة", "المركبات الداخلة إلى المستديرة", "المركبات الموجودة إلى يمين المركبة"],
    fr: ["Les véhicules déjà dans le rond-point", "Les véhicules entrant dans le rond-point", "Les véhicules situés à droite"],
    en: ["Vehicles already in the roundabout", "Vehicles entering the roundabout", "Vehicles located to the right of the vehicle"]
  },
  correct: 0
},
{
  type: "normal",
  id: 61,
  category: "private_car",
  question: {
    ar: "يسمح القانون بإيقاف المركبة بشكل موازٍ للرصيف على طريق ذو مسلكين متعاكسين:",
    fr: "Il est légal de stationner parallèlement au trottoir sur une rue à double sens:",
    en: "It is legal to parallel park a vehicle to the pavement on a single-lane two-way street:"
  },
  options: {
    ar: ["على يمين اتجاه السير", "لا يهم طالما لا تعيق السير", "على يسار الطريق"],
    fr: ["À droite dans le sens de la marche", "Peu importe si cela ne gêne pas", "À gauche de la route"],
    en: ["To the right of the direction of driving", "Doesn't matter as long as it doesn't hinder traffic", "To the left of the road"]
  },
  correct: 0
},
{
  type: "normal",
  id: 62,
  category: "private_car",
  question: {
    ar: "إسراف سائق المركبة في الطعام:",
    fr: "L’excès de nourriture:",
    en: "Excessive eating:"
  },
  options: {
    ar: ["يمكنه من القيادة بشكل أسلم", "يسبب البلادة وصعوبة اتخاذ القرارات الصحيحة", "يمكنه من القيادة بسرعات عالية جداً"],
    fr: ["Aide à conduire plus sûrement", "Réduit la capacité à réagir correctement et prendre les bonnes décisions", "Permet de garder le contrôle à très grande vitesse"],
    en: ["Helps the driver drive more safely", "Will impair the driver's ability to react properly and make the right decisions", "Will allow the driver to maintain control while driving at very high speeds"]
  },
  correct: 1
},
{
  type: "normal",
  id: 63,
  category: "private_car",
  question: {
    ar: "قلة النوم لسائق المركبة:",
    fr: "Le manque de sommeil chez le conducteur:",
    en: "Insufficient sleeping:"
  },
  options: {
    ar: ["تساعده على تحسين ردّات الفعل", "تبطئ ردات فعله أثناء القيادة وتسبب له فقداناً طفيفاً للذاكرة", "تساعده على الانتباه"],
    fr: ["Améliore les réactions", "Ralentit les réactions pendant la conduite et cause une légère perte de mémoire", "Aide à être attentif"],
    en: ["Helps improve reaction", "Slows down his reactions during driving and causes him a slight loss of memory", "Helps him to be alert"]
  },
  correct: 1
},
{
  type: "normal",
  id: 64,
  category: "private_car",
  question: {
    ar: "خلال الرحلات الطويلة، على سائق المركبة أن يتوقف للراحة كل:",
    fr: "Dans les longs trajets, le conducteur doit s’arrêter pour se reposer chaque:",
    en: "In long trips, the driver must stop for rest every:"
  },
  options: {
    ar: ["10 ساعات", "8 ساعات", "4 ساعات"],
    fr: ["10 heures", "8 heures", "4 heures"],
    en: ["10 hours", "8 hours", "4 hours"]
  },
  correct: 2
},
{
  type: "normal",
  id: 65,
  category: "private_car",
  question: {
    ar: "خلال الرحلات الطويلة، من الأفضل لسائق المركبة أن يتوقف للراحة كل:",
    fr: "Dans les longs trajets, le conducteur doit s’arrêter chaque:",
    en: "In long trips, the driver must stop around every:"
  },
  options: {
    ar: ["250 كلم", "750 كلم", "900 كلم"],
    fr: ["250 kilomètres", "750 kilomètres", "900 kilomètres"],
    en: ["250 kilometers", "750 kilometers", "900 kilometers"]
  },
  correct: 0
},
{
  type: "normal",
  id: 66,
  category: "private_car",
  question: {
    ar: "القيادة تحت تأثير الكحول:",
    fr: "Conduire sous l’influence de l’alcool:",
    en: "Driving under the influence of alcohol:"
  },
  options: {
    ar: ["تعرّض حياة السائق والآخرين للخطر", "تعرّض حياة الآخرين فقط للخطر", "تعرّض حياة السائق فقط للخطر"],
    fr: ["Met en danger la vie du conducteur et celle des autres", "Met en danger la vie des autres seulement", "Met en danger la vie du conducteur seulement"],
    en: ["Endangers driver’s life as well as the lives of others", "Endangers others' lives only", "Endangers the driver only"]
  },
  correct: 0
},
{
  type: "normal",
  id: 67,
  category: "private_car",
  question: {
    ar: "خلال الرحلات الطويلة جداً، على السائق أن:",
    fr: "Durant les longs trajets, le conducteur:",
    en: "During very long trips, the driver should:"
  },
  options: {
    ar: ["يتناول الأمفيتامينات بانتظام", "يتابع القيادة دون راحة", "لا يتناول أبداً الأمفيتامينات للبقاء مستيقظاً"],
    fr: ["Doit prendre des amphétamines régulièrement", "Continuer à rouler sans se reposer", "Ne doit jamais prendre des amphétamines pour rester éveillé"],
    en: ["Consume amphetamines regularly", "Continue driving without rest", "Never consume amphetamines to stay awake"]
  },
  correct: 2
},
{
  type: "normal",
  id: 68,
  category: "private_car",
  question: {
    ar: "أفضل وسيلة ليعرف السائق مدى تأثير الدواء على القيادة هي أن:",
    fr: "La meilleure façon de connaître l’effet d’un médicament sur la conduite est de:",
    en: "The best way for a driver to know how a medical drug affects his driving is to:"
  },
  options: {
    ar: ["يسأل سائقاً آخر", "يسأل الطبيب أو الصيدلي", "يجرّبه على سائق آخر"],
    fr: ["Poser la question à un autre conducteur", "Poser la question au médecin ou au pharmacien", "Le tester sur un autre conducteur"],
    en: ["Check with another driver", "Check with his physician", "Test it on another driver"]
  },
  correct: 1
},
{
  type: "normal",
  id: 69,
  category: "private_car",
  question: {
    ar: "تناول الكحول أو المخدرات أثناء القيادة يولد لدى السائق شعوراً زائفاً:",
    fr: "Rouler sous l’influence de l’alcool ou des drogues crée un faux sentiment:",
    en: "Driving under the influence of alcohol or drugs causes the driver a false feeling of:"
  },
  options: {
    ar: ["بالخوف", "بالشجاعة والإقدام", "بالغضب"],
    fr: ["De peur", "De courage et d’audace", "De colère"],
    en: ["Fear", "Courage and boldness", "Outrage"]
  },
  correct: 1
},
{
  type: "normal",
  id: 70,
  category: "private_car",
  question: {
    ar: "عندما تريد أن تتجاوز بمركبتك مركبة أخرى، عليك أن:",
    fr: "Lorsque vous êtes sur le point de dépasser un véhicule, vous devez:",
    en: "When you are about to overtake another vehicle, you should:"
  },
  options: {
    ar: ["تعتمد على إشارات سائق تلك المركبة", "لا تعتمد أبداً على إشارات سائق تلك المركبة", "تعتمد على إشارات السائق خلفك"],
    fr: ["Compter sur les instructions du conducteur de ce véhicule", "Ne jamais compter sur les instructions du conducteur de ce véhicule", "Compter sur les instructions du conducteur derrière vous"],
    en: ["Rely on that vehicle light signals", "Never depend on that vehicle’s driver hand gestures", "Check the signals of the driver behind you"]
  },
  correct: 1
},


{
  type: "normal",
  id: 74,
  category: "motorcycle",
  question: {
    ar: "تتأمن الحماية الحقيقية لسائق الدراجة النارية عن طريق:",
    fr: "La vraie protection du motocycliste est assurée par:",
    en: "The motorcyclist can protect himself by:"
  },
  options: {
    ar: ["ارتداء الملابس الواقية الخاصة بالدراجات النارية", "القيادة على عجلة واحدة", "التأكد من وجود تأمين على الدراجة"],
    fr: ["La tenue protectrice", "La circulation sur une seule roue", "Le contrat d'assurance"],
    en: ["Wearing motorcycle protective gear", "Driving the motorcycle on one wheel", "Ensure that there is insurance on the motorcycle"]
  },
  correct: 0
},
{
  type: "normal",
  id: 75,
  category: "motorcycle",
  question: {
    ar: "البدلة الجلدية الواقية الخاصة براكبي الدراجات النارية لها قدرة على مقاومة:",
    fr: "La tenue en cuir du motocycliste est résistante:",
    en: "The motorcycle protective leather suit can resist:"
  },
  options: {
    ar: ["القيادة السريعة وتجاوز المسارب", "الاحتكاك مع الإسفلت والحصى", "الحريق"],
    fr: ["À la circulation rapide et le dépassement des voies", "À la friction avec l’asphalte et les cailloux", "Au feu"],
    en: ["Driving fast and straddling lanes", "Friction with asphalt and small stones", "Fire"]
  },
  correct: 1
},
{
  type: "normal",
  id: 76,
  category: "motorcycle",
  question: {
    ar: "ارتداء قفازات الدراجة النارية يؤمن:",
    fr: "Lorsque le motocycliste met des gants, ils protègent:",
    en: "Motorcycle gloves protect:"
  },
  options: {
    ar: ["الرأس عند السقوط", "اليدين من البرد والإصابة", "الرجلين عند السقوط"],
    fr: ["La tête en cas de chute", "Les mains contre le froid et les blessures", "Les jambes en cas de chute"],
    en: ["The head when falling", "The hands from cold and injuries", "The legs when falling"]
  },
  correct: 1
},
{
  type: "normal",
  id: 77,
  category: "motorcycle",
  question: {
    ar: "حذاء الدراجة النارية يؤمن حماية:",
    fr: "Les bottes du motocycliste protègent:",
    en: "Motorcycle boots protect:"
  },
  options: {
    ar: ["الركبتين والفخذين من البرد", "القدمين من الغبار", "القدمين من الإصابة والماء والبرد"],
    fr: ["Les genoux et les cuisses contre le froid", "Les pieds contre la poussière", "Les pieds contre les blessures, l’eau et le froid"],
    en: ["The knees and thighs from cold", "The feet from dust", "The feet from injury, water, and cold"]
  },
  correct: 2
},
{
  type: "normal",
  id: 78,
  category: "motorcycle",
  question: {
    ar: "واقي العمود الفقري للدراجة النارية يؤمن حماية:",
    fr: "La protection dorsale protège:",
    en: "The spine protective suit protect:"
  },
  options: {
    ar: ["الصدر والبطن من الحر والبرد", "العمود الفقري من المطر", "العمود الفقري والنخاع الشوكي من الإصابة"],
    fr: ["La poitrine et l’abdomen contre la chaleur et le froid", "La colonne vertébrale et la moelle contre la pluie", "La colonne vertébrale et la moelle contre les blessures"],
    en: ["The chest and abdomen from heat and cold", "The spine and spinal cord from the rain", "The spine and spinal cord from injury"]
  },
  correct: 2
},
{
  type: "normal",
  id: 79,
  category: "motorcycle",
  question: {
    ar: "النظارات الواقية تحمي:",
    fr: "Les lunettes de protection protègent:",
    en: "The protective eye glasses protect:"
  },
  options: {
    ar: ["الأذنين من البرد", "العينين من المطر والهواء والرمل والحشرات", "العينين من الدموع"],
    fr: ["Les oreilles contre le froid", "Les yeux contre la pluie, le vent, le sable et les insectes", "Les yeux contre les larmes"],
    en: ["Ears from cold", "Eyes from rain, wind, sand, and insects", "Eyes from crying"]
  },
  correct: 1
},
{
  type: "normal",
  id: 80,
  category: "motorcycle",
  question: {
    ar: "خوذة الدراجة النارية تؤمن حماية:",
    fr: "Le casque du motocycliste protège:",
    en: "The motorcyclist helmet protects:"
  },
  options: {
    ar: ["حاسة السمع من ضوضاء السير", "من إصابات الرأس القاتلة", "العمود الفقري"],
    fr: ["L’ouïe contre le bruit de la circulation", "Contre les blessures mortelles à la tête", "La colonne vertébrale"],
    en: ["The hearing sense from traffic noise", "From fatal head injuries", "The spine"]
  },
  correct: 1
},
{
  type: "normal",
  id: 81,
  category: "motorcycle",
  question: {
    ar: "عدم ارتداء الخوذة أو ارتداؤها بشكل غير صحيح أثناء القيادة:",
    fr: "Si le motocycliste porte mal le casque ou ne le porte pas en conduisant:",
    en: "If the motorcyclist wears the helmet improperly or fails to wear it while driving:"
  },
  options: {
    ar: ["يعتبر مخالفة قانونية", "يعتبر تصرفاً طبيعياً", "يعتبر عملاً منطقياً"],
    fr: ["Constitue une infraction légale", "Est un comportement normal", "Est un comportement logique"],
    en: ["Is considered a legal violation", "Is considered normal behavior", "Is wise"]
  },
  correct: 0
},
{
  type: "normal",
  id: 82,
  category: "motorcycle",
  question: {
    ar: "مجرد حمل الخوذة وربطها دون ارتدائها أثناء القيادة:",
    fr: "Le simple fait de porter le casque sans le mettre pendant la conduite:",
    en: "Just carrying the helmet or fastening it without wearing it while driving:"
  },
  options: {
    ar: ["يعطي السائق حماية قانونية", "لا يعطي السائق حماية قانونية", "هو تصرف حكيم"],
    fr: ["Donne au conducteur une protection légale", "Ne donne pas au conducteur une protection légale", "Est un comportement sage"],
    en: ["Gives the motorcyclist legal protection", "Does not give the motorcyclist legal protection", "Is wise"]
  },
  correct: 1
},
{
  type: "normal",
  id: 83,
  category: "motorcycle",
  question: {
    ar: "أثناء القيادة الليلية، يجب على سائق الدراجة النارية ارتداء:",
    fr: "Pendant la conduite de nuit, le motocycliste devrait porter:",
    en: "While driving at night, the motorcyclist should wear:"
  },
  options: {
    ar: ["ملابس داكنة", "بدلة فسفورية", "ملابس رياضية"],
    fr: ["Des vêtements foncés", "Une tenue fluorescente", "Une tenue de sport"],
    en: ["Dark colors", "A fluorescent suit", "A sports outfit"]
  },
  correct: 1
},
{
  type: "normal",
  id: 84,
  category: "motorcycle",
  question: {
    ar: "لكي يكون مرئياً أثناء القيادة ليلاً، يُنصح سائق الدراجة النارية أن:",
    fr: "Pour être vu pendant la conduite de nuit, le motocycliste devrait:",
    en: "To be seen while driving at night, the motorcyclist is advised to:"
  },
  options: {
    ar: ["يضع شرائط عاكسة للضوء", "يطفئ أضواءه ويضع شرائط عاكسة", "يصدر صوتاً بفرامله"],
    fr: ["Attacher des bandes réfléchissantes", "Éteindre les phares et attacher des bandes réfléchissantes", "Faire un bruit avec les freins"],
    en: ["Attach luminous stripes", "Turn off his lights and attach luminous stripes", "Make squeaking noise with his brakes"]
  },
  correct: 0
},
{
  type: "normal",
  id: 85,
  category: "motorcycle",
  question: {
    ar: "إذا كانت الدراجة مجهزة بنظام فرامل هيدروليكي، فيجب دورياً:",
    fr: "Si la moto est équipée d’un système de frein hydraulique, il faut périodiquement:",
    en: "If the motorcycle is equipped with a hydraulic brake system, then the driver should periodically:"
  },
  options: {
    ar: ["فحص مستوى زيت الفرامل", "التخفيف من استعمال الفرامل", "فحص سلك الفرامل"],
    fr: ["Vérifier le niveau du liquide de frein", "Limiter l’usage des freins", "Vérifier le câble de frein"],
    en: ["Check the level of brake fluid", "Limit the use of brakes", "Check the level of brake line"]
  },
  correct: 0
},
{
  type: "normal",
  id: 86,
  category: "motorcycle",
  question: {
    ar: "الحد الأدنى لعمق نقوش إطارات الدراجة النارية يجب ألا يقل عن:",
    fr: "La profondeur des sculptures des pneus de la moto ne doit pas être inférieure à:",
    en: "The tread depth of the motorcycle tires should not be less than:"
  },
  options: {
    ar: ["5 ملم", "3 ملم", "6 ملم"],
    fr: ["5 millimètres", "3 millimètres", "6 millimètres"],
    en: ["5 millimeters", "3 millimeters", "6 millimeters"]
  },
  correct: 1
},
{
  type: "normal",
  id: 87,
  category: "motorcycle",
  question: {
    ar: "لكي يستطيع سائق الدراجة توجيه المقود بسهولة، يجب أن:",
    fr: "Pour diriger librement la moto, le conducteur doit:",
    en: "In order to steer the motorcycle freely, the driver should:"
  },
  options: {
    ar: ["يجلس بعيداً عن المقود", "يجلس قريباً من المقود", "يمسك المقود بيد واحدة"],
    fr: ["S’asseoir loin du guidon", "S’asseoir près du guidon", "Tenir le guidon d’une seule main"],
    en: ["Sit away from the steering grips", "Sit close to the steering grips", "Hold the steering grips with one hand"]
  },
  correct: 1
},
{
  type: "normal",
  id: 88,
  category: "motorcycle",
  question: {
    ar: "لتفادي الزيادة غير المقصودة في السرعة، يجب أن يمسك سائق الدراجة المقبض بحيث يكون:",
    fr: "Pour éviter une augmentation involontaire de vitesse, le motocycliste doit tenir la poignée de façon que:",
    en: "In order to avoid unintended speed increase, the motorcyclist should hold the steering grip in such a way that his:"
  },
  options: {
    ar: ["معصم اليد اليمنى إلى الأعلى", "معصم اليد اليسرى إلى الأعلى", "معصم اليد اليمنى إلى الأسفل"],
    fr: ["Le poignet droit vers le haut", "Le poignet gauche vers le haut", "Le poignet droit vers le bas"],
    en: ["Right wrist is upwards", "Left wrist is upwards", "Right wrist is downwards"]
  },
  correct: 2
},
{
  type: "normal",
  id: 89,
  category: "motorcycle",
  question: {
    ar: "عملية الكبح في الدراجة النارية تكون أكثر فعالية عندما يستخدم السائق:",
    fr: "Le freinage d’une moto est plus efficace lorsque le conducteur utilise:",
    en: "For motorcycles, the braking process is most effective when the motorcyclist uses:"
  },
  options: {
    ar: ["الفرامل الخلفية فقط", "الفرامل الأمامية والخلفية معاً", "قدميه على الإسفلت"],
    fr: ["Le frein arrière seulement", "Les freins avant et arrière ensemble", "Ses pieds sur l’asphalte"],
    en: ["Back brakes only", "Both back and front brakes", "His feet, by pressing them on the asphalt"]
  },
  correct: 1
},
{
  type: "normal",
  id: 90,
  category: "motorcycle",
  question: {
    ar: "لتفادي انزلاق الدراجة النارية عند الفرملة الشديدة، يجب أن تكون الدراجة:",
    fr: "Pour éviter le dérapage au freinage intense, la moto doit être:",
    en: "For motorcycles to avoid skidding while severe braking, the motorcycle should be:"
  },
  options: {
    ar: ["في منعطف", "بسرعة عالية", "في وضع مستقيم"],
    fr: ["Dans un virage", "À grande vitesse", "En ligne droite"],
    en: ["In a curve", "At high speed", "Straight / upright"]
  },
  correct: 2
},


,
{
  type: "normal",
  id: 91,
  category: "motorcycle",
  question: {
    ar: "عند القيادة على طرق زلقة بالدراجة النارية يجب:",
    fr: "En conduisant sur une route glissante, le motocycliste doit:",
    en: "When riding on a slippery road, the motorcyclist should:"
  },
  options: {
    ar: ["زيادة السرعة", "القيادة بسلاسة وتخفيف السرعة", "استعمال الفرامل بشدة"],
    fr: ["Augmenter la vitesse", "Conduire en douceur et réduire la vitesse", "Freiner brusquement"],
    en: ["Increase speed", "Ride smoothly and reduce speed", "Brake hard"]
  },
  correct: 1
},
{
  type: "normal",
  id: 92,
  category: "motorcycle",
  question: {
    ar: "عند القيادة في الرياح القوية يجب:",
    fr: "En cas de vent fort, le motocycliste doit:",
    en: "In strong winds, the motorcyclist should:"
  },
  options: {
    ar: ["تثبيت المقود جيداً وتخفيف السرعة", "زيادة السرعة", "ترك المقود"],
    fr: ["Tenir fermement le guidon et ralentir", "Accélérer", "Lâcher le guidon"],
    en: ["Hold the handlebar firmly and slow down", "Speed up", "Let go of the handlebar"]
  },
  correct: 0
},
{
  type: "normal",
  id: 93,
  category: "motorcycle",
  question: {
    ar: "عند القيادة خلف مركبة كبيرة يجب:",
    fr: "En suivant un gros véhicule, le motocycliste doit:",
    en: "When riding behind a large vehicle, the motorcyclist should:"
  },
  options: {
    ar: ["الاقتراب منها", "ترك مسافة أمان كافية", "التجاوز فوراً"],
    fr: ["Se rapprocher", "Garder une distance de sécurité", "Dépasser immédiatement"],
    en: ["Get closer", "Keep a safe distance", "Overtake immediately"]
  },
  correct: 1
},
{
  type: "normal",
  id: 94,
  category: "motorcycle",
  question: {
    ar: "عند الانعطاف بالدراجة النارية يجب:",
    fr: "Lors d’un virage, le motocycliste doit:",
    en: "When turning, the motorcyclist should:"
  },
  options: {
    ar: ["يميل مع الدراجة", "يبقى مستقيم", "يقف"],
    fr: ["S’incliner avec la moto", "Rester droit", "Se lever"],
    en: ["Lean with the motorcycle", "Stay upright", "Stand up"]
  },
  correct: 0
},
{
  type: "normal",
  id: 95,
  category: "motorcycle",
  question: {
    ar: "عند القيادة ليلاً يجب:",
    fr: "La nuit, le motocycliste doit:",
    en: "At night, the motorcyclist should:"
  },
  options: {
    ar: ["إطفاء الأنوار", "استعمال الأنوار المناسبة", "زيادة السرعة"],
    fr: ["Éteindre les feux", "Utiliser les feux appropriés", "Accélérer"],
    en: ["Turn off lights", "Use proper lights", "Increase speed"]
  },
  correct: 1
},
{
  type: "normal",
  id: 96,
  category: "motorcycle",
  question: {
    ar: "عند القيادة في المطر يجب:",
    fr: "Sous la pluie, le motocycliste doit:",
    en: "In rain, the motorcyclist should:"
  },
  options: {
    ar: ["زيادة السرعة", "تخفيف السرعة", "عدم الانتباه"],
    fr: ["Accélérer", "Ralentir", "Ne pas faire attention"],
    en: ["Speed up", "Slow down", "Not pay attention"]
  },
  correct: 1
},
{
  type: "normal",
  id: 97,
  category: "motorcycle",
  question: {
    ar: "عند الفرملة بالدراجة النارية يجب:",
    fr: "Lors du freinage, le motocycliste doit:",
    en: "When braking, the motorcyclist should:"
  },
  options: {
    ar: ["استعمال الفرامل الأمامية فقط", "استعمال الفرامل الخلفية فقط", "استعمال الفرامل معاً"],
    fr: ["Frein avant seulement", "Frein arrière seulement", "Les deux freins"],
    en: ["Front brake only", "Rear brake only", "Both brakes"]
  },
  correct: 2
},
{
  type: "normal",
  id: 98,
  category: "motorcycle",
  question: {
    ar: "عند رؤية خطر مفاجئ يجب:",
    fr: "En cas de danger soudain, le motocycliste doit:",
    en: "In sudden danger, the motorcyclist should:"
  },
  options: {
    ar: ["الهلع", "التصرف بهدوء", "زيادة السرعة"],
    fr: ["Paniquer", "Rester calme", "Accélérer"],
    en: ["Panic", "Stay calm", "Speed up"]
  },
  correct: 1
},
{
  type: "normal",
  id: 99,
  category: "motorcycle",
  question: {
    ar: "عند القيادة بجانب مركبات يجب:",
    fr: "En circulant à côté d'autres véhicules, le motocycliste doit:",
    en: "When riding near vehicles, the motorcyclist should:"
  },
  options: {
    ar: ["الاقتراب", "ترك مسافة", "التجاهل"],
    fr: ["Se rapprocher", "Garder distance", "Ignorer"],
    en: ["Get closer", "Keep distance", "Ignore"]
  },
  correct: 1
},
{
  type: "normal",
  id: 100,
  category: "motorcycle",
  question: {
    ar: "عند التوقف بالدراجة يجب:",
    fr: "À l’arrêt, le motocycliste doit:",
    en: "When stopping, the motorcyclist should:"
  },
  options: {
    ar: ["إطفاء المحرك", "ترك الدراجة تعمل", "النزول فوراً"],
    fr: ["Éteindre moteur", "Laisser tourner", "Descendre immédiatement"],
    en: ["Turn off engine", "Leave it running", "Get off immediately"]
  },
  correct: 0
},

// ================= NEW MIX =================

{
  type: "normal",
  id: 101,
  category: "private_car",
  question: {
    ar: "عند القيادة في الضباب يجب:",
    fr: "Dans le brouillard, le conducteur doit:",
    en: "In fog, the driver should:"
  },
  options: {
    ar: ["استعمال الضوء العالي", "استعمال الضوء المنخفض", "إطفاء الأنوار"],
    fr: ["Feux de route", "Feux de croisement", "Éteindre les feux"],
    en: ["High beam", "Low beam", "Turn off lights"]
  },
  correct: 1
},
{
  type: "normal",
  id: 102,
  category: "private_car",
  question: {
    ar: "عند الانزلاق بالمركبة يجب:",
    fr: "En cas de dérapage:",
    en: "When skidding:"
  },
  options: {
    ar: ["الفرملة بقوة", "توجيه المركبة مع الانزلاق", "زيادة السرعة"],
    fr: ["Freiner fort", "Diriger avec le dérapage", "Accélérer"],
    en: ["Brake hard", "Steer with skid", "Speed up"]
  },
  correct: 1
},


{
  type: "normal",
  id: 105,
  category: "private_car",
  question: {
    ar: "عند الاقتراب من ممر مشاة يجب:",
    fr: "Approche passage piéton:",
    en: "Approaching crosswalk:"
  },
  options: {
    ar: ["زيادة السرعة", "التوقف عند الحاجة", "التجاوز"],
    fr: ["Accélérer", "S’arrêter si nécessaire", "Dépasser"],
    en: ["Speed up", "Stop if needed", "Overtake"]
  },
  correct: 1
},
{
  type: "normal",
  id: 106,
  category: "motorcycle",
  question: {
    ar: "الدراجة النارية أكثر عرضة:",
    fr: "La moto est plus exposée:",
    en: "Motorcycle is more exposed:"
  },
  options: {
    ar: ["للرياح", "للمطر", "للحوادث"],
    fr: ["Au vent", "À la pluie", "Aux accidents"],
    en: ["Wind", "Rain", "Accidents"]
  },
  correct: 2
},
{
  type: "normal",
  id: 107,
  category: "motorcycle",
  question: {
    ar: "يجب على سائق الدراجة:",
    fr: "Le motocycliste doit:",
    en: "Motorcyclist must:"
  },
  options: {
    ar: ["لبس خوذة", "عدم لبس خوذة", "اختياري"],
    fr: ["Porter casque", "Sans casque", "Optionnel"],
    en: ["Wear helmet", "No helmet", "Optional"]
  },
  correct: 0
},
{
  type: "normal",
  id: 108,
  category: "private_car",
  question: {
    ar: "عند استخدام الهاتف:",
    fr: "Utiliser téléphone:",
    en: "Using phone:"
  },
  options: {
    ar: ["آمن", "خطر", "مسموح"],
    fr: ["Sûr", "Dangereux", "Autorisé"],
    en: ["Safe", "Dangerous", "Allowed"]
  },
  correct: 1
},

{
  type: "normal",
  id: 110,
  category: "private_car",
  question: {
    ar: "حزام الأمان:",
    fr: "Ceinture:",
    en: "Seatbelt:"
  },
  options: {
    ar: ["ضروري", "غير ضروري", "اختياري"],
    fr: ["Obligatoire", "Pas obligatoire", "Optionnel"],
    en: ["Mandatory", "Not required", "Optional"]
  },
  correct: 0
},






  {
    type: "normal",
    id: 20,
    category: "public_car",
    question: {
      ar: "يتم تشغيل التاكسيميتر لضبط:",
      fr: "Le taximètre sert à enregistrer :",
      en: "The taximeter is operated to record:"
    },
    options: {
      ar: ["المسافة والوقت المستغرقين للرحلة بما في ذلك أوقات التوقف", "المسافة والوقت المستغرقين للرحلة من دون أوقات التوقف", "المسافة والوقت والمنطقة التي تتم فيها الرحلة"],
      fr: ["La distance et la durée du trajet, arrêts compris", "La distance et la durée du trajet, arrêts exclus", "La distance, la durée et la zone dans laquelle le trajet a lieu"],
      en: ["The distance and time taken for the trip, including stops", "The distance and time taken for the trip, excluding stops", "The distance, time, and area in which the trip takes place"]
    },
    correct: 0
  },

   {
    type: "normal",
    id: 1,
    category: "public_car",
    question: {
      ar: "يمنع التوقف من أجل صعود أو نزول الركاب عند التقاطعات والمستديرات ضمن مسافة:",
      fr: "Il est interdit de s'arrêter pour déposer/prendre des passagers aux intersections et aux ronds-points à une distance de moins de :",
      en: "It is prohibited to stop to pick up or drop off passengers at intersections and roundabouts within a distance of:"
    },
    options: {
      ar: ["10 أمتار من التقاطع أو المستديرة", "25 متراً من التقاطع أو المستديرة", "40 متراً من التقاطع أو المستديرة"],
      fr: ["10 mètres de l'intersection ou du rond-point", "25 mètres de l'intersection ou du rond-point", "40 mètres de l'intersection ou du rond-point"],
      en: ["10 meters from the intersection or roundabout", "25 meters from the intersection or roundabout", "40 meters from the intersection or roundabout"]
    },
    correct: 1
  },

  {
    type: "normal",
    id: 2,
    category: "public_car",
    question: {
      ar: "يمنع تخفيف السرعة أو التوقف لاستجلاب الركاب:",
      fr: "Il est interdit de ralentir ou de s'arrêter pour prendre des passagers :",
      en: "It is prohibited to slow down or stop to pick up passengers:"
    },
    options: {
      ar: ["قرب التقاطعات والمستديرات", "على المنعطفات", "كل ما ورد أعلاه"],
      fr: ["À proximité des intersections et des ronds-points", "Dans les virages", "Toutes ces réponses"],
      en: ["Near intersections and roundabouts", "On bends", "All of the above"]
    },
    correct: 2
  },

  {
    type: "normal",
    id: 3,
    category: "public_car",
    question: {
      ar: "على السائقين العموميين عند مصادفة مستخدمي طريق آخرين التقيد بقاعدة:",
      fr: "Lorsqu'ils rencontrent d'autres usagers de la route, les conducteurs de véhicules publics doivent respecter les règles suivantes :",
      en: "When encountering other road users, commercial drivers must adhere to the following rules:"
    },
    options: {
      ar: ["افساح المرور", "حق المرور", "كل ما ورد أعلاه"],
      fr: ["Cédez le passage", "Priorité", "Toutes ces réponses"],
      en: ["Giving way", "Right-of-Way", "All of the above"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 4,
    category: "public_car",
    question: {
      ar: "يعتبر \"حق المرور\" كونه من المسائل الخاصة:",
      fr: "La « droit de passage » est considérée comme une question relative aux :",
      en: "\"Right-of-Way\" is considered a matter related to:"
    },
    options: {
      ar: ["بالحقوق العقارية", "بحقوق السائقين", "بحقوق المشاة"],
      fr: ["Droits de propriété", "Droits des conducteurs", "Droits des piétons"],
      en: ["Property rights", "Drivers' rights", "Pedestrian rights"]
    },
    correct: 1
  },

  {
    type: "normal",
    id: 5,
    category: "public_car",
    question: {
      ar: "يعتبر \"حق الأفضلية\" كونه من المسائل الخاصة:",
      fr: "La « priorité de la route » est considérée comme une question relative :",
      en: "\"Priority-of-Road\" is considered a matter related to:"
    },
    options: {
      ar: ["بتصنيف الطريق من قبل وزارة الأشغال", "بحقوق السائقين المذكورة في قانون السير", "بحقوق القوى المسلحة"],
      fr: ["A la classification des routes par le Ministère des Travaux Publics et Transport", "Aux droits des conducteurs tels que stipulés dans le Code de la route", "Aux droits des forces armées"],
      en: ["Road classification by the Ministry of Public Works and Transportation", "Drivers' rights as stipulated in the Traffic Law", "Armed Forces Rights"]
    },
    correct: 1
  },

  {
    type: "normal",
    id: 6,
    category: "public_car",
    question: {
      ar: "يعتبر \"افساح الطريق\" من القواعد:",
      fr: "« Cédez le passage » est une règle qui :",
      en: "\"Giving way\" is a rule that:"
    },
    options: {
      ar: ["المفروضة في اتفاقيات السير الدولية", "المتعارف عليها محلياً", "التي تعكس كرم أخلاق من السائق"],
      fr: ["Est imposée par les accords internationaux sur la circulation", "Est reconnue localement", "Reflète les bonnes mœurs du conducteur"],
      en: ["Is imposed by international traffic agreements", "Is recognized locally", "Reflects good moral character on the part of the driver"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 7,
    category: "public_car",
    question: {
      ar: "ينبغي \"افساح المرور\" للسائقين الآخرين:",
      fr: "« Cédez le passage » doit être adressé aux autres conducteurs :",
      en: "\"Giving way\" should be made to other drivers:"
    },
    options: {
      ar: ["بعد تشغيلهم إشارة التنبيه (flasher)", "بعد تشغيلهم إشارة الاتجاه", "كل ما ورد أعلاه"],
      fr: ["Après avoir actionné les feux de détresse", "Après avoir actionné le clignotant", "Toutes les réponses ci-dessus"],
      en: ["After they activate hazard lights", "After they activate turn signal", "All of the above"]
    },
    correct: 1
  },

  {
    type: "normal",
    id: 8,
    category: "public_car",
    question: {
      ar: "يؤثر الحوار والتحدث مع الركاب على:",
      fr: "La conversation avec les passagers affecte :",
      en: "Conversation with passengers affects:"
    },
    options: {
      ar: ["التركيز الذهني", "القدرة على تعدد المهام", "كل ما ورد أعلاه"],
      fr: ["La concentration", "La capacité à effectuer plusieurs tâches à la fois", "Toutes les réponses ci-dessus"],
      en: ["Mental concentration", "The ability to multitask", "All of the above"]
    },
    correct: 2
  },

  {
    type: "normal",
    id: 9,
    category: "public_car",
    question: {
      ar: "تقتضي قاعدة مضاعفة الانتباه عند التوقف والاقتراب من تقاطعات:",
      fr: "La double vérification à l’arrêt et à l’approche des intersections exige :",
      en: "The double-checking rule when stopping and approaching intersections requires:"
    },
    options: {
      ar: ["النظر مرتين على الأقل في جميع المرايا", "النظر مرة في جميع المرايا مع تشغيل الإشارات", "طلب المساعدة من الركاب"],
      fr: ["De vérifier au moins deux fois dans tous les rétroviseurs", "De vérifier une fois dans tous les rétroviseurs, clignotants allumés", "De demander de l’aide aux passagers"],
      en: ["Checking at least twice in all mirrors", "Checking once in all mirrors with the signals on", "Asking for help from passengers"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 10,
    category: "public_car",
    question: {
      ar: "عند وجود مخاطر سير إضافية بسبب حالة الطريق أو الإنارة أو الطقس يتوجب على السائق:",
      fr: "En cas de dangers supplémentaires liés à l’état de la route, à l’éclairage ou aux conditions météorologiques, le conducteur doit :",
      en: "When additional traffic hazards exist due to road conditions, lighting, or weather, the driver must:"
    },
    options: {
      ar: ["التمهل في السير", "مضاعفة الانتباه", "كل ما ورد أعلاه"],
      fr: ["Ralentir", "Redoubler d’attention", "Tout ce qui précède"],
      en: ["Slow down", "Pay extra attention", "All of the above"]
    },
    correct: 2
  },

  {
    type: "normal",
    id: 11,
    category: "public_car",
    question: {
      ar: "ينبغي على السائق العمومي القيام بصيانة السيارة بشكل:",
      fr: "Les chauffeurs de véhicules publics doivent entretenir leurs véhicules :",
      en: "Commercial drivers must maintain their vehicles:"
    },
    options: {
      ar: ["استباقي", "عند وقوع عطل", "دوري"],
      fr: ["De manière proactive", "En cas de panne", "Périodiquement"],
      en: ["Proactively", "Upon a breakdown", "Periodically"]
    },
    correct: 2
  },

  {
    type: "normal",
    id: 12,
    category: "public_car",
    question: {
      ar: "تعتبر نظافة السيارة الخارجية والداخلية للسيارات العمومية أمراً:",
      fr: "La propreté extérieure et intérieure des véhicules publics est :",
      en: "The cleanliness of the exterior and interior of commercial vehicles is:"
    },
    options: {
      ar: ["اختيارياً لا يفرضه القانون", "إلزامياً يفرضه القانون", "يتوافق مع القواعد العامة لسيارات الأجرة"],
      fr: ["Facultative, non requise par la loi", "Obligatoire, requise par la loi", "Conforme à la réglementation générale des taxis"],
      en: ["Optional, not required by law", "Mandatory, required by law", "Compliant with general taxi regulations"]
    },
    correct: 1
  },

  {
    type: "normal",
    id: 13,
    category: "public_car",
    question: {
      ar: "من واجبات سائق السيارة العمومية حيازة:",
      fr: "Les chauffeurs de véhicules publics sont tenus d’avoir :",
      en: "Commercial vehicle drivers are required to have:"
    },
    options: {
      ar: ["علبة إسعاف أولية", "عدة نظافة للمحرك", "كل ما ورد أعلاه"],
      fr: ["Une trousse de premiers secours", "Un kit de nettoyage moteur", "Tout ce qui précède"],
      en: ["A first aid kit", "An engine cleaning kit", "All of the above"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 14,
    category: "public_car",
    question: {
      ar: "يمكن للسائق العمومي أن يعمل مقابل أجرة:",
      fr: "Les chauffeurs de véhicules publics peuvent travailler contre rémunération :",
      en: "Commercial drivers may work for a fee:"
    },
    options: {
      ar: ["على سيارات تحمل لوحة عمومية", "على سيارات تحمل لوحة خصوصية", "على كافة السيارات"],
      fr: ["Sur les véhicules immatriculés dans des véhicules publics", "Sur les véhicules immatriculés dans des véhicules privés", "Sur tous les véhicules"],
      en: ["On commercial vehicles with commercial license plates", "On private vehicles with private license plates", "On all vehicles"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 15,
    category: "public_car",
    question: {
      ar: "ترتبط سلامة الإطارات:",
      fr: "La sécurité des pneus est liée à :",
      en: "Tire safety is related to:"
    },
    options: {
      ar: ["بعمر الإطار", "بنوعية الإطار", "كل ما ورد أعلاه"],
      fr: ["L’âge des pneus", "La qualité des pneus", "Tout ce qui précède"],
      en: ["Tire age", "Tire quality", "All of the above"]
    },
    correct: 2
  },

  {
    type: "normal",
    id: 16,
    category: "public_car",
    question: {
      ar: "عند وجود حمولة في المركبة بالإضافة إلى الركاب يجب أن لا يتعدى وزنها:",
      fr: "Lorsque le véhicule contient des marchandises en plus des passagers, son poids ne doit pas dépasser :",
      en: "When the vehicle contains cargo in addition to passengers, its weight must not exceed:"
    },
    options: {
      ar: ["وزن عدد الركاب", "الوزن الإجمالي المحدد في مواصفات المصنع على أن لا تشكل الحمولة عبئاً على سير المركبة", "كل ما ورد أعلاه"],
      fr: ["Le poids des passagers", "Le poids total spécifié dans les spécifications du constructeur, à condition que la cargaison ne constitue pas une charge pour le véhicule", "Tout ce qui précède"],
      en: ["The weight of the passengers", "The total weight specified in the manufacturer's specifications, provided that the cargo does not constitute a burden on the vehicle's movement", "All of the above"]
    },
    correct: 1
  },

  {
    type: "normal",
    id: 17,
    category: "public_car",
    question: {
      ar: "عند تحميل بضاعة مختلفة الأوزان في صندوق السيارة يتم وضعها بالترتيب التالي:",
      fr: "Lors du chargement de marchandises de poids différents dans le coffre du véhicule, celles-ci doivent être placées dans l'ordre suivant :",
      en: "When loading goods of varying weights into the trunk of the vehicle, they shall be placed in the following order:"
    },
    options: {
      ar: ["الحمولة الأثقل وزناً في الأسفل", "الحمولة الأخف وزناً في الأسفل", "بأي شكل يلائم ضبط البضاعة ضمن الصندوق"],
      fr: ["Charge la plus lourde en bas", "Charge la plus légère en bas", "De toute manière permettant de loger le chargement dans le coffre"],
      en: ["The heaviest load at the bottom", "The lightest load at the bottom", "In any manner that accommodates the cargo within the trunk"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 18,
    category: "public_car",
    question: {
      ar: "على سائق الأجرة لسيارة سياحية تحمل لوحة عمومية الاستحصال على ترخيص من وزارة الأشغال العامة والنقل لتحديد:",
      fr: "Le chauffeur de taxi d'un véhicule de tourisme immatriculé publiquement doit obtenir une licence auprès du ministère des Travaux publics et des Transports précisant :",
      en: "A taxi driver of a tourist vehicle bearing a commercial license plate must obtain a license from the Ministry of Public Works and Transport to specify:"
    },
    options: {
      ar: ["المناطق التي يعمل فيها", "فئة الركاب", "كل ما ورد أعلاه"],
      fr: ["La zone d'activité", "La catégorie de passager", "Tout ce qui précède"],
      en: ["The areas in which he operates", "The passenger category", "All of the above"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 19,
    category: "public_car",
    question: {
      ar: "يلزم القانون سائق التاكسي بوجود تاكسيميتر في:",
      fr: "La loi exige que les chauffeurs de taxi soient équipés d'un taximètre dans :",
      en: "The law requires taxi drivers to have a taximeter in:"
    },
    options: {
      ar: ["سيارات الأجرة التابعة لمكاتب", "سيارات الأجرة المملوكة من أشخاص", "كافة سيارات الأجرة"],
      fr: ["Les taxis appartenant à des agences", "Les taxis privés", "Tous les taxis"],
      en: ["Taxi cabs belonging to offices", "Privately owned taxis", "All taxis"]
    },
    correct: 2
  },

  
  {
    type: "normal",
    id: 21,
    category: "public_car",
    question: {
      ar: "على مالك أو سائق السيارة التي تحمل لوحة عمومية:",
      fr: "Le propriétaire ou le conducteur d’un véhicule immatriculé sous une plaque d’immatriculation publique doit :",
      en: "The owner or driver of a vehicle bearing a commercial license plate must:"
    },
    options: {
      ar: ["دفع اشتراكات الضمان الإجتماعي بانتظام", "تحمل المسؤولية المدنية الناتجة عن حوادث السائق", "كل ما ورد أعلاه"],
      fr: ["Payer régulièrement les cotisations de sécurité sociale", "Assumer la responsabilité civile en cas d’accident du conducteur", "Toutes les conditions ci-dessus"],
      en: ["Pay social security contributions regularly", "Bear civil liability for driver accidents", "All of the above"]
    },
    correct: 2
  },

  {
    type: "normal",
    id: 22,
    category: "public_car",
    question: {
      ar: "على سائق السيارة العمومية الإلتزام بالعمل:",
      fr: "Le conducteur d’un véhicule public doit travailler :",
      en: "The driver of a commercial vehicle must work:"
    },
    options: {
      ar: ["في المناطق التي يرخص له العمل فيها حصراً", "في المناطق التي يرخص له العمل فيها حصراً عدا أيام العطل", "في جميع المناطق"],
      fr: ["Exclusivement dans les zones où il est autorisé à travailler", "Exclusivement dans les zones autorisées sauf les jours fériés", "Dans toutes les zones"],
      en: ["Exclusively in the areas where he is licensed to work", "Exclusively in the licensed areas except holidays", "In all areas"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 23,
    category: "public_car",
    question: {
      ar: "إن انتساب السائق العمومي إلى نقابات النقل:",
      fr: "L’adhésion d’un chauffeur de transport public à un syndicat des transports est :",
      en: "Membership of a commercial driver in a transport union is:"
    },
    options: {
      ar: ["اختياري", "إلزامي لجميع المناطق", "إلزامي فقط بحسب المناطق"],
      fr: ["Facultative", "Obligatoire pour toutes les zones", "Obligatoire uniquement par région"],
      en: ["Optional", "Mandatory for all areas", "Mandatory only by region"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 24,
    category: "public_car",
    question: {
      ar: "إن العمل النقابي يهدف إلى:",
      fr: "L’activité syndicale vise à :",
      en: "Union activity aims to:"
    },
    options: {
      ar: ["حماية حقوق ومكاسب المهنة", "دعم العمل السياسي والحزبي", "كل ما ورد أعلاه"],
      fr: ["Protéger les droits et les acquis de la profession", "Soutenir le travail politique et partisan", "Toutes les réponses ci-dessus"],
      en: ["Protect the rights and gains of the profession", "Support political and party work", "All of the above"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 25,
    category: "public_car",
    question: {
      ar: "تحدد التعرفة للنقل بواسطة:",
      fr: "Les tarifs de transport sont déterminés par :",
      en: "Transportation fares are determined by:"
    },
    options: {
      ar: ["وزارة النقل", "النقابات المعنية", "صاحب المركبة"],
      fr: ["Le ministère des Transports", "Les syndicats concernés", "Le propriétaire du véhicule"],
      en: ["The Ministry of Transport", "The relevant unions", "The vehicle owner"]
    },
    correct: 1
  },

  {
    type: "normal",
    id: 26,
    category: "public_car",
    question: {
      ar: "يؤدي وضع حمولة مرتفعة على سطح السيارة إلى:",
      fr: "Placer une charge élevée sur le toit d'un véhicule entraîne :",
      en: "Placing high loads on the roof of a vehicle leads to:"
    },
    options: {
      ar: ["زيادة مخاطر انقلابها وتدهورها", "زيادة مصروف الوقود بسبب مقاومة الهواء", "كل ما ورد أعلاه"],
      fr: ["Un risque accru de retournement du véhicule", "Une consommation de carburant accrue", "Toutes ces réponses"],
      en: ["Increased risk of rollover", "Increased fuel consumption", "All of the above"]
    },
    correct: 2
  },

  {
    type: "normal",
    id: 27,
    category: "public_car",
    question: {
      ar: "إن السجل المروري للسائقين العموميين يخضع للمراقبة ويؤدي في حالة تعدي المخالفات إلى:",
      fr: "Le dossier de conduite des conducteurs de véhicules publics est soumis à un contrôle et peut entraîner :",
      en: "The traffic record of commercial drivers is subject to monitoring and may result in:"
    },
    options: {
      ar: ["سحب رخصة السوق بشكل مؤقت", "إلغاء رخصة السوق بشكل نهائي", "كل ما ورد أعلاه"],
      fr: ["Le retrait temporaire du permis", "L’annulation définitive du permis", "Toutes ces réponses"],
      en: ["Temporary revocation of the driver's license", "Permanent cancellation of the driver's license", "All of the above"]
    },
    correct: 2
  },

  {
    type: "normal",
    id: 28,
    category: "public_car",
    question: {
      ar: "عدد النقاط على رخصة السوق اللبنانية هو:",
      fr: "Le nombre de points sur le permis de conduire libanais est de :",
      en: "The number of points on the Lebanese driver's license is:"
    },
    options: {
      ar: ["10", "12", "20"],
      fr: ["10", "12", "20"],
      en: ["10", "12", "20"]
    },
    correct: 1
  },

  {
    type: "normal",
    id: 29,
    category: "public_car",
    question: {
      ar: "على السائق العمومي في حال تعرضه لإهانة من راكب أو ركاب:",
      fr: "Si un conducteur public est insulté par un ou plusieurs passagers, il doit :",
      en: "If a commercial driver is insulted by a passenger or passengers, he must:"
    },
    options: {
      ar: ["المعاملة بالمثل", "المحافظة على هدوئه وتصرفه بحذر", "تبليغ قوى الأمن"],
      fr: ["Rendre la pareille", "Rester calme et agir avec prudence", "Prévenir les forces de l'ordre"],
      en: ["Reciprocate the insult", "Remain calm and act with caution", "Notify the security forces"]
    },
    correct: 1
  },

  {
    type: "normal",
    id: 30,
    category: "public_car",
    question: {
      ar: "لا يسمح للحمولة الإضافية:",
      fr: "Les charges supplémentaires ne sont pas autorisées :",
      en: "Additional cargo is not permitted:"
    },
    options: {
      ar: ["تجاوز طول المركبة", "تجاوز عرض المركبة", "كل ما ورد أعلاه"],
      fr: ["De dépasser la longueur du véhicule", "De dépasser la largeur du véhicule", "Toutes les réponses ci-dessus"],
      en: ["Exceeding the length of the vehicle", "Exceeding the width of the vehicle", "All of the above"]
    },
    correct: 2
  },

  {
    type: "normal",
    id: 31,
    category: "public_car",
    question: {
      ar: "الحد الأقصى للسرعة داخل المناطق السكنية عند عدم وجود لافتات هو:",
      fr: "La vitesse maximale autorisée dans les zones résidentielles sans signalisation est :",
      en: "The maximum speed limit within residential areas, when there are no signs, is:"
    },
    options: {
      ar: ["50 كم/ساعة", "80 كم/ساعة", "100 كم/ساعة"],
      fr: ["50 km/h", "80 km/h", "100 km/h"],
      en: ["50 km/h", "80 km/h", "100 km/h"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 32,
    category: "public_car",
    question: {
      ar: "عند اقترابك من تقاطع بدون إشارات مرور، يجب أن:",
      fr: "À l’approche d’une intersection sans feu de circulation, vous devez :",
      en: "When approaching an intersection without traffic lights, you must:"
    },
    options: {
      ar: ["تواصل السير بسرعة عادية", "تخفف السرعة وتفسح المرور للقادم من جهة اليمين", "تضيء الأضواء العالية باستمرار"],
      fr: ["Continuer à vitesse normale", "Ralentir et céder le passage à la circulation venant de droite", "Garder vos feux de route allumés"],
      en: ["Continue at a normal speed", "Slow down and yield to traffic coming from the right", "Keep your high beams on continuously"]
    },
    correct: 1
  },

  {
    type: "normal",
    id: 33,
    category: "public_car",
    question: {
      ar: "عند طلب راكب التوقف للنزول، عليك كسائق سيارة أجرة التوقف:",
      fr: "Lorsqu’un passager demande un arrêt, en tant que chauffeur de taxi, vous devez vous arrêter :",
      en: "When a passenger requests to stop, you as a taxi driver must stop:"
    },
    options: {
      ar: ["فقط في الأماكن المسموح التوقف فيها", "في أي مكان يرغب به الراكب خارج المدن", "في الأماكن المحددة داخل المدن"],
      fr: ["Uniquement aux endroits autorisés", "À l’endroit souhaité par le passager hors des agglomérations", "Aux endroits désignés en ville"],
      en: ["Only in permitted places", "Anywhere the passenger wishes outside cities", "In designated places within cities"]
    },
    correct: 2
  },

  {
    type: "normal",
    id: 34,
    category: "public_car",
    question: {
      ar: "ما هو الغرض من حزام الأمان؟",
      fr: "À quoi sert la ceinture de sécurité ?",
      en: "What is the purpose of a seat belt?"
    },
    options: {
      ar: ["تزيين السيارة فقط", "حماية السائق والركاب في حال وقوع حادث", "لا فائدة له عند السرعات البطيئة"],
      fr: ["Décorer le véhicule", "Protéger le conducteur et les passagers en cas d’accident", "Elle est inutile à basse vitesse"],
      en: ["To decorate the vehicle only", "To protect the driver and passengers in the event of an accident", "It is useless at low speeds"]
    },
    correct: 1
  },

  {
    type: "normal",
    id: 35,
    category: "public_car",
    question: {
      ar: "إذا أضاءت الإشارة الحمراء في إشارة المرور، ماذا تفعل؟",
      fr: "Si un feu passe au rouge, que devez-vous faire ?",
      en: "If a red light is on at a traffic light, what should you do?"
    },
    options: {
      ar: ["تتابع السير بسرعة", "تقف قبل خط التوقف وممر المشاة وتنتظر الضوء الأخضر", "تقف قبل ممر المشاة مباشرة"],
      fr: ["Continuer à vitesse", "Vous arrêter avant la ligne d'arrêt et le passage piéton", "Vous arrêter juste avant le passage piéton"],
      en: ["Proceed at speed", "Stop before the stop line and pedestrian crossing and wait for green", "Stop directly before a pedestrian crossing"]
    },
    correct: 1
  },

  {
    type: "normal",
    id: 36,
    category: "public_car",
    question: {
      ar: "متى يجب تشغيل أضواء الانتظار (الإشارات الرباعية)؟",
      fr: "Quand faut-il allumer les feux de détresse ?",
      en: "When must the hazard lights be turned on?"
    },
    options: {
      ar: ["عند التوقف الإضطراري أو وجود عطل في الطريق", "عند القيادة داخل المدينة نهاراً", "عند التجاوز على الطريق السريع"],
      fr: ["Lors d'un arrêt d'urgence ou en cas de panne", "En circulation en ville de jour", "Lors d'un dépassement sur autoroute"],
      en: ["When making an emergency stop or a road breakdown is detected", "When driving in the city during the day", "When overtaking on a highway"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 37,
    category: "public_car",
    question: {
      ar: "يتم تحميل حقائب الركاب:",
      fr: "Les bagages des passagers doivent être chargés :",
      en: "Passenger luggage should be loaded:"
    },
    options: {
      ar: ["في حضن الراكب", "في صندوق السيارة", "في أي مكان في المقصورة أو الصندوق"],
      fr: ["Sur les genoux du passager", "Dans le coffre", "N'importe où dans l'habitacle ou le coffre"],
      en: ["On the passenger's lap", "In the trunk", "Anywhere in the passenger compartment or trunk"]
    },
    correct: 1
  },

  {
    type: "normal",
    id: 38,
    category: "public_car",
    question: {
      ar: "عند وقوفك لتحميل الركاب، يجب أن يكون التوقف:",
      fr: "Lorsque vous vous arrêtez pour faire monter des passagers, vous devez vous arrêter :",
      en: "When stopping to load passengers, you must stop:"
    },
    options: {
      ar: ["في المواقف والأماكن المخصصة", "في أي مكان يطلبه الراكب", "عند المنعطفات والتقاطعات"],
      fr: ["Dans les places de stationnement et zones désignées", "Partout où le passager le demande", "Aux virages et intersections"],
      en: ["In designated parking spaces and areas", "Anywhere the passenger requests", "At turns and intersections"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 39,
    category: "public_car",
    question: {
      ar: "في حال كان الراكب يحمل أمتعة كبيرة الحجم يجب:",
      fr: "Si le passager transporte des bagages hors gabarit, vous devez :",
      en: "If the passenger is carrying oversized luggage, you must:"
    },
    options: {
      ar: ["تحميلها بطريقة لا تعيق حركة الأبواب والرؤية", "وضعها فوق المقاعد المخصصة للركاب", "تحميلها حتى لو منعت إغلاق الأبواب"],
      fr: ["Les charger de manière à ne pas gêner les portes ni la visibilité", "Les placer au-dessus des sièges passagers", "Les charger même si les portes ne se ferment pas"],
      en: ["Load it in a way that does not obstruct the doors and visibility", "Place it on top of the passenger seats", "Load it even if the doors cannot be closed"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 40,
    category: "public_car",
    question: {
      ar: "ما هو السلوك الصحيح عند تلقي الأجرة من الراكب أثناء القيادة؟",
      fr: "Quel est le comportement correct à adopter lorsque vous recevez le tarif du passager pendant la conduite ?",
      en: "What is the correct behavior when receiving a fare from a passenger while driving?"
    },
    options: {
      ar: ["التركيز على عد المال أثناء السير", "استلام الأجرة بعد التوقف بشكل آمن", "إعطاء الباقي وأنت تقود بسرعة"],
      fr: ["Se concentrer sur le comptage de la monnaie", "Encaisser l’argent après un arrêt en toute sécurité", "Rendre la monnaie en roulant vite"],
      en: ["Focus on counting money while driving", "Collect the fare safely after stopping", "Give change while driving quickly"]
    },
    correct: 1
  }

  ,
  {
    type: "normal",
    id: 41,
    category: "public_car",
    question: {
      ar: "ما هو السلوك الصحيح من سائق الأجرة تجاه الركاب عند نشوء خلاف معهم؟",
      fr: "Quel est le comportement correct d'un chauffeur de taxi envers les passagers en cas de conflit ?",
      en: "What is the correct behavior for a taxi driver towards passengers when a dispute arises with them?"
    },
    options: {
      ar: ["الإلتزام بالأدب وحسن التعامل لخفض التوتر", "معاملتهم بحدة وصوت مرتفع", "تجاهل شكاوى الركاب"],
      fr: ["Rester poli et courtois pour réduire la tension", "Les traiter durement et à voix haute", "Ignorer les plaintes des passagers"],
      en: ["Be polite and courteous to reduce tension", "Treat them harshly and raise your voice", "Ignore passengers' complaints"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 42,
    category: "public_car",
    question: {
      ar: "يسمح بإشغال السيارة بعدد ركاب يفوق عدد المقاعد:",
      fr: "Il est permis d'occuper le véhicule avec plus de passagers que le nombre de sièges :",
      en: "Passengers are permitted to occupy the vehicle in excess of the number of seats:"
    },
    options: {
      ar: ["بحسب عدد المقاعد المسموح به فقط", "وقوفاً إذا لم توجد مقاعد كافية", "باعتبار كل مقعدين مخصصين لثلاث ركاب"],
      fr: ["Seulement dans la limite du nombre de sièges autorisé", "Debout s'il n'y a pas suffisamment de sièges", "En considérant deux sièges comme trois passagers"],
      en: ["Subject to the permitted number of seats only", "Standing if there are insufficient seats", "Considering every two seats as three passengers"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 43,
    category: "public_car",
    question: {
      ar: "يتم التوقف لإصعاد الركاب:",
      fr: "Les arrêts pour prendre des passagers sont :",
      en: "Stops to pick up passengers are made:"
    },
    options: {
      ar: ["في الأماكن المخصصة لذلك", "في المكان الذي يطلبه الراكب", "في المكان الذي يناسب السيارة"],
      fr: ["Aux endroits désignés", "À l'emplacement demandé par le passager", "À un emplacement adapté au véhicule"],
      en: ["In designated places", "In the place requested by the passenger", "In a place that fits the vehicle"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 44,
    category: "public_car",
    question: {
      ar: "يتم تحميل أمتعة كبيرة الحجم ينقلها الراكب:",
      fr: "Les bagages hors gabarit transportés par le passager sont chargés :",
      en: "Oversized luggage carried by the passenger is loaded:"
    },
    options: {
      ar: ["بطريقة لا تعيق حركة الأبواب والرؤية", "ضمن 15 سم خارج الأبواب", "ضمن 30 سم خارج الأبواب"],
      fr: ["De manière à ne pas gêner les portes et la visibilité", "À moins de 15 cm des portes", "À moins de 30 cm des portes"],
      en: ["In a way that does not obstruct the doors and visibility", "Within 15 cm outside the doors", "Within 30 cm outside the doors"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 45,
    category: "public_car",
    question: {
      ar: "يتم استلام الأجرة من الزبون:",
      fr: "Le paiement est effectué auprès du client :",
      en: "The fare is collected from the customer:"
    },
    options: {
      ar: ["أثناء القيادة", "بعد التوقف أو بشكل آمن", "وأنت تقود بسرعة"],
      fr: ["Pendant la conduite", "Après un arrêt en toute sécurité", "Pendant la conduite à grande vitesse"],
      en: ["While driving", "After stopping safely", "While driving at speed"]
    },
    correct: 1
  },

  {
    type: "normal",
    id: 46,
    category: "public_car",
    question: {
      ar: "عند صعود راكب يحمل قارورة غاز صغيرة:",
      fr: "Lors de l'embarquement d'un passager transportant une petite bouteille de gaz :",
      en: "When boarding a passenger carrying a small gas cylinder:"
    },
    options: {
      ar: ["يسمح بها إذا كانت محكمة الإغلاق", "يمنع نقلها منعاً باتاً", "يسمح بها إذا وافق باقي الركاب"],
      fr: ["Son transport est autorisé si elle est hermétiquement fermée", "Son transport est strictement interdit", "Son transport est autorisé avec l'accord des autres passagers"],
      en: ["It is permitted if it is tightly closed", "It is strictly prohibited to carry it", "It is permitted if the other passengers agree"]
    },
    correct: 1
  },

  {
    type: "normal",
    id: 47,
    category: "public_car",
    question: {
      ar: "تصنف الطرق في لبنان في:",
      fr: "Les routes au Liban sont classées en :",
      en: "Roads in Lebanon are classified into:"
    },
    options: {
      ar: ["ثلاث فئات: دولية ورئيسية ومحلية", "أربع فئات: دولية، أوتوسترادات، رئيسية ومحلية", "خمس فئات: دولية، أوتوسترادات، رئيسية، محلية وشريانية"],
      fr: ["Trois catégories : internationales, principales et locales", "Quatre catégories : internationales, autoroute, principales et locales", "Cinq catégories : internationales, autoroute, principales, locales et artérielles"],
      en: ["Three categories: international, main, and local", "Four categories: international, highway, main, and local", "Five categories: international, highway, main, local, and arterial"]
    },
    correct: 1
  },

  {
    type: "normal",
    id: 48,
    category: "public_car",
    question: {
      ar: "يقسم تسجيل سائقي السيارات العمومية في الصندوق الوطني للضمان الاجتماعي إلى:",
      fr: "L'inscription des conducteurs de véhicules publics auprès de la Caisse nationale de sécurité sociale est divisée en :",
      en: "Commercial transport driver registration with the National Social Security Fund is divided into:"
    },
    options: {
      ar: ["فئتين: سائق مالك وسائق غير مالك", "فئتين: سائق لبناني وسائق أجنبي", "فئتين: سائق خصوصي وسائق عمومي"],
      fr: ["Deux catégories : chauffeur-propriétaire et chauffeur non-propriétaire", "Deux catégories : chauffeur libanais et chauffeur étranger", "Deux catégories : chauffeur privé et chauffeur public"],
      en: ["Two categories: owner-driver and non-owner-driver", "Two categories: Lebanese driver and foreign driver", "Two categories: private driver and commercial driver"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 49,
    category: "public_car",
    question: {
      ar: "تساهم الدولة في اشتراكات الصندوق الوطني للضمان الاجتماعي:",
      fr: "L’État contribue aux cotisations à la Caisse nationale de sécurité sociale :",
      en: "The state contributes to the National Social Security Fund contributions:"
    },
    options: {
      ar: ["للسائق المقعد", "للسائق المالك", "للسائق غير المالك"],
      fr: ["Pour les conducteurs handicapés", "Pour les chauffeurs-propriétaires", "Pour les chauffeurs non-propriétaires"],
      en: ["For disabled drivers", "For owner-drivers", "For non-owner-drivers"]
    },
    correct: 2
  },

  {
    type: "normal",
    id: 50,
    category: "public_car",
    question: {
      ar: "يتم التسجيل في الصندوق الوطني للضمان الاجتماعي:",
      fr: "L’inscription à la Caisse nationale de sécurité sociale est finalisée :",
      en: "Registration with the National Social Security Fund takes place:"
    },
    options: {
      ar: ["بعد تقديم طلب انتساب وقبوله", "فوراً عند شراء لوحة ومن دون طلب", "فقط لغير المسجل في الضمان"],
      fr: ["Après le dépôt et l’acceptation d’une demande d’adhésion", "Immédiatement après l’achat d’une plaque d’immatriculation et sans demande", "Uniquement pour les personnes non inscrites à la Caisse"],
      en: ["After submitting an application and its acceptance", "Immediately upon purchasing a license plate and without a request", "Only for those not registered with the Fund"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 51,
    category: "public_car",
    question: {
      ar: "على السائق بالأجرة لدى مؤسسة أو شركة التصريح عن ضريبة الدخل ودفع اشتراكات الصندوق الوطني للضمان الاجتماعي:",
      fr: "Les chauffeurs employés par une institution ou une entreprise doivent déclarer leurs impôts sur le revenu et s’acquitter de leurs cotisations :",
      en: "A driver hired by an institution or company must declare income tax and pay National Social Security Fund contributions:"
    },
    options: {
      ar: ["بشكل مباشر", "عبر مستخدمه", "عبر مكتب محاسبة"],
      fr: ["Directement", "Par l’intermédiaire de leur employeur", "Par l’intermédiaire d’un cabinet comptable"],
      en: ["Directly", "Through his employer", "Through an accounting office"]
    },
    correct: 1
  },

  {
    type: "normal",
    id: 52,
    category: "public_car",
    question: {
      ar: "على السائق بالأجرة بشكل مستقل التصريح عن ضريبة الدخل ودفع اشتراكات الصندوق الوطني للضمان الاجتماعي:",
      fr: "Un chauffeur de taxi indépendant doit déclarer ses impôts sur le revenu et s’acquitter de ses cotisations :",
      en: "An independent driver must declare income tax and pay National Social Security Fund contributions:"
    },
    options: {
      ar: ["بشكل مباشر", "عبر مستخدمه", "عبر مكتب محاسبة"],
      fr: ["Directement", "Par l’intermédiaire de son employeur", "Par l’intermédiaire d’un cabinet comptable"],
      en: ["Directly", "Through his employer", "Through an accounting office"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 53,
    category: "public_car",
    question: {
      ar: "يؤدي التأخر عن دفع مستحقات الصندوق الوطني للضمان الاجتماعي إلى:",
      fr: "Tout retard de paiement des cotisations à la Caisse nationale de sécurité sociale entraînera :",
      en: "Late payment of National Social Security Fund dues results in:"
    },
    options: {
      ar: ["توقف الاستفادة من تقديمات الضمان", "دفع غرامة تأخير", "كل ما ورد أعلاه"],
      fr: ["La suspension des prestations", "Un paiement d'une pénalité de retard", "Toutes les réponses ci-dessus"],
      en: ["Suspension of benefits", "Payment of a late fee", "All of the above"]
    },
    correct: 2
  },

  {
    type: "normal",
    id: 54,
    category: "public_car",
    question: {
      ar: "يؤدي التأخر في تجديد صلاحية رخصة السوق للسائقين العموميين المستفيدين من الصندوق الوطني للضمان الاجتماعي إلى:",
      fr: "Tout retard dans le renouvellement du permis de conduire des conducteurs publics bénéficiaires entraînera :",
      en: "Delay in renewing the driver's license for commercial drivers benefiting from the National Social Security Fund will result in:"
    },
    options: {
      ar: ["توقف الاستفادة من تقديمات الضمان", "دفع غرامة تأخير", "كل ما ورد أعلاه"],
      fr: ["La suspension des prestations", "Un paiement d'une pénalité de retard", "Toutes les réponses ci-dessus"],
      en: ["Suspension of social security benefits", "Payment of a late fee", "All of the above"]
    },
    correct: 2
  },

  {
    type: "normal",
    id: 55,
    category: "public_car",
    question: {
      ar: "ينقسم اشتراك الصندوق الوطني للضمان الاجتماعي للسائقين العموميين بعد سن 64 إلى فروع:",
      fr: "La cotisation à la Caisse nationale de sécurité sociale pour les chauffeurs de plus de 64 ans est répartie selon :",
      en: "The National Social Security Fund subscription for commercial drivers over the age of 64 is divided into:"
    },
    options: {
      ar: ["المرض والأمومة ونهاية الخدمة", "المرض والأمومة والتعويضات العائلية", "نهاية الخدمة والتعويضات العائلية"],
      fr: ["Maladie, maternité et fin de service", "Maladie, maternité et allocations familiales", "Fin de service et allocations familiales"],
      en: ["Sickness, maternity, and end of service benefits", "Sickness, maternity, and family benefits", "End of service benefits and family benefits"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 56,
    category: "public_car",
    question: {
      ar: "يسمح بالحصول على رخصة سوق عمومية بعد التأكد أن السجل العدلي لطالب الرخصة خالٍ من:",
      fr: "Un permis de conduire public peut être obtenu après vérification que le casier judiciaire du demandeur est vierge de :",
      en: "A commercial driver's license may be obtained after ensuring that the applicant's criminal record is free of:"
    },
    options: {
      ar: ["أحكام مخدرات", "أحكام مانعة غير المخدرات", "كل ما ورد أعلاه"],
      fr: ["Condamnations pour trafic de stupéfiants", "Condamnations non liées à la drogue", "Toutes les condamnations ci-dessus"],
      en: ["Drug convictions", "Non-drug-related convictions", "All of the above"]
    },
    correct: 2
  },

  {
    type: "normal",
    id: 57,
    category: "public_car",
    question: {
      ar: "على السائق العمومي حمل رخصة نقل:",
      fr: "Les chauffeurs routiers doivent être titulaires d’un permis de transport :",
      en: "Commercial drivers must hold a transport license:"
    },
    options: {
      ar: ["لكافة أنواع السيارات", "لسيارات الشحن الخصوصي التي تنقل بضائع", "للسيارات العمومية التي تنقل بضائع"],
      fr: ["Pour tous les types de véhicules", "Pour les véhicules de transport privé de marchandises", "Pour les véhicules publics de transport de marchandises"],
      en: ["For all types of vehicles", "For private cargo vehicles transporting goods", "For commercial vehicles transporting goods"]
    },
    correct: 2
  },

  {
    type: "normal",
    id: 58,
    category: "public_car",
    question: {
      ar: "يسمح للسيارات العمومية بنقل الركاب من مطار رفيق الحريري الدولي:",
      fr: "Les véhicules de transport de passagers sont autorisés à transporter des passagers depuis l’aéroport Rafic Hariri :",
      en: "Commercial vehicles are permitted to transport passengers from Rafic Hariri International Airport:"
    },
    options: {
      ar: ["إذا كانت السيارة مرخصة لذلك", "إذا كان السائق يحمل رخصة سوق فئة باص 1", "كل ما ورد أعلاه"],
      fr: ["Si le véhicule est immatriculé à cet effet", "Si le conducteur est titulaire d’un permis Bus 1", "Toutes les réponses ci-dessus"],
      en: ["If the vehicle is licensed for this purpose", "If the driver holds a Bus 1 category driver's license", "All of the above"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 59,
    category: "public_car",
    question: {
      ar: "تجدد رخص النقل لسيارات نقل البضائع:",
      fr: "Les permis de transport de marchandises sont renouvelés :",
      en: "Transport licenses for freight vehicles are renewed:"
    },
    options: {
      ar: ["كل خمس سنوات", "سنوياً", "كل ستة أشهر"],
      fr: ["Tous les cinq ans", "Annuellement", "Tous les six mois"],
      en: ["Every five years", "Annually", "Every six months"]
    },
    correct: 1
  },

  {
    type: "normal",
    id: 60,
    category: "public_car",
    question: {
      ar: "على سائق السيارة السياحية العمومية معرفة الطرق:",
      fr: "Un conducteur de transport public doit connaître le réseau routier :",
      en: "A commercial transport driver must know the roads:"
    },
    options: {
      ar: ["في جميع الأراضي اللبنانية", "في المناطق المرخص له بالعمل فيها", "في منطقة إقامته"],
      fr: ["Sur tout le territoire libanais", "Dans les zones où il est autorisé à opérer", "Dans sa zone de résidence"],
      en: ["Throughout Lebanese territory", "In the areas where he is authorized to operate", "In his area of residence"]
    },
    correct: 1
  },


,
  {
    type: "normal",
    id: 61,
    category: "public_car",
    question: {
      ar: "على السائق العمومي الالتزام بقواعد السير:",
      fr: "Le conducteur public doit respecter les règles de circulation :",
      en: "A commercial driver must respect traffic rules:"
    },
    options: {
      ar: ["في جميع الأوقات", "فقط عند وجود شرطة", "في الطرق السريعة فقط"],
      fr: ["À tout moment", "Seulement en présence de police", "Uniquement sur autoroute"],
      en: ["At all times", "Only when police are present", "Only on highways"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 62,
    category: "public_car",
    question: {
      ar: "يجب على السائق العمومي الحفاظ على:",
      fr: "Le conducteur public doit maintenir :",
      en: "A commercial driver must maintain:"
    },
    options: {
      ar: ["نظافة المركبة", "سرعة عالية", "عدم الانتباه"],
      fr: ["La propreté du véhicule", "Une vitesse élevée", "Le manque d’attention"],
      en: ["Vehicle cleanliness", "High speed", "Lack of attention"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 63,
    category: "public_car",
    question: {
      ar: "قيادة المركبة العمومية تحت تأثير الكحول:",
      fr: "Conduire un véhicule public sous l'effet de l'alcool :",
      en: "Driving a public vehicle under alcohol influence:"
    },
    options: {
      ar: ["ممنوع", "مسموح", "اختياري"],
      fr: ["Interdit", "Autorisé", "Optionnel"],
      en: ["Forbidden", "Allowed", "Optional"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 64,
    category: "public_car",
    question: {
      ar: "يجب إعطاء الأولوية:",
      fr: "La priorité doit être donnée :",
      en: "Priority must be given:"
    },
    options: {
      ar: ["حسب القوانين", "حسب المزاج", "حسب السرعة"],
      fr: ["Selon les règles", "Selon l’humeur", "Selon la vitesse"],
      en: ["According to rules", "According to mood", "According to speed"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 65,
    category: "public_car",
    question: {
      ar: "استخدام الهاتف أثناء القيادة:",
      fr: "L'utilisation du téléphone en conduisant :",
      en: "Using phone while driving:"
    },
    options: {
      ar: ["خطر", "آمن", "مسموح"],
      fr: ["Dangereux", "Sûr", "Autorisé"],
      en: ["Dangerous", "Safe", "Allowed"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 66,
    category: "public_car",
    question: {
      ar: "عند القيادة ليلاً يجب:",
      fr: "Lors de la conduite de nuit :",
      en: "When driving at night:"
    },
    options: {
      ar: ["تشغيل الأضواء", "إطفاء الأضواء", "عدم الانتباه"],
      fr: ["Allumer les feux", "Éteindre les feux", "Ne pas faire attention"],
      en: ["Turn on lights", "Turn off lights", "Not pay attention"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 67,
    category: "public_car",
    question: {
      ar: "يجب احترام إشارات المرور:",
      fr: "Les feux de circulation doivent être respectés :",
      en: "Traffic signals must be respected:"
    },
    options: {
      ar: ["دائماً", "أحياناً", "نادراً"],
      fr: ["Toujours", "Parfois", "Rarement"],
      en: ["Always", "Sometimes", "Rarely"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 68,
    category: "public_car",
    question: {
      ar: "عند وجود مشاة:",
      fr: "En présence de piétons :",
      en: "When pedestrians are present:"
    },
    options: {
      ar: ["إعطاؤهم الأولوية", "تجاهلهم", "زيادة السرعة"],
      fr: ["Leur donner la priorité", "Les ignorer", "Accélérer"],
      en: ["Give them priority", "Ignore them", "Speed up"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 69,
    category: "public_car",
    question: {
      ar: "يجب ربط حزام الأمان:",
      fr: "La ceinture de sécurité doit être attachée :",
      en: "Seatbelt must be worn:"
    },
    options: {
      ar: ["دائماً", "اختياري", "غير ضروري"],
      fr: ["Toujours", "Optionnel", "Inutile"],
      en: ["Always", "Optional", "Not necessary"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 70,
    category: "public_car",
    question: {
      ar: "عند المطر يجب:",
      fr: "Quand il pleut :",
      en: "When it rains:"
    },
    options: {
      ar: ["تخفيف السرعة", "زيادة السرعة", "عدم الانتباه"],
      fr: ["Ralentir", "Accélérer", "Ne pas faire attention"],
      en: ["Slow down", "Speed up", "Ignore"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 71,
    category: "public_car",
    question: {
      ar: "المسافة الآمنة تساعد على:",
      fr: "La distance de sécurité permet de :",
      en: "Safety distance helps to:"
    },
    options: {
      ar: ["تفادي الحوادث", "زيادة السرعة", "عدم التوقف"],
      fr: ["Éviter les accidents", "Accélérer", "Ne pas s’arrêter"],
      en: ["Avoid accidents", "Increase speed", "Not stop"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 72,
    category: "public_car",
    question: {
      ar: "يجب استخدام المرايا:",
      fr: "Les rétroviseurs doivent être utilisés :",
      en: "Mirrors must be used:"
    },
    options: {
      ar: ["بشكل دائم", "نادراً", "غير ضروري"],
      fr: ["Toujours", "Rarement", "Inutile"],
      en: ["Always", "Rarely", "Not necessary"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 73,
    category: "public_car",
    question: {
      ar: "السرعة الزائدة:",
      fr: "L'excès de vitesse :",
      en: "Speeding:"
    },
    options: {
      ar: ["خطر", "آمن", "مسموح"],
      fr: ["Dangereux", "Sûr", "Autorisé"],
      en: ["Dangerous", "Safe", "Allowed"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 74,
    category: "public_car",
    question: {
      ar: "عند الانعطاف:",
      fr: "Lors d’un virage :",
      en: "When turning:"
    },
    options: {
      ar: ["تشغيل الإشارة", "عدم تشغيلها", "زيادة السرعة"],
      fr: ["Mettre le clignotant", "Ne pas le mettre", "Accélérer"],
      en: ["Use signal", "Do not signal", "Speed up"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 75,
    category: "public_car",
    question: {
      ar: "عند التوقف المفاجئ:",
      fr: "En cas d’arrêt brusque :",
      en: "In sudden stop:"
    },
    options: {
      ar: ["تشغيل الفلاشر", "عدم فعل شيء", "زيادة السرعة"],
      fr: ["Allumer les feux de détresse", "Ne rien faire", "Accélérer"],
      en: ["Turn on hazard lights", "Do nothing", "Accelerate"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 76,
    category: "public_car",
    question: {
      ar: "إشارات الطريق:",
      fr: "Les panneaux de signalisation :",
      en: "Road signs:"
    },
    options: {
      ar: ["يجب احترامها", "تجاهلها", "اختياري"],
      fr: ["Doivent être respectés", "Ignorés", "Optionnels"],
      en: ["Must be respected", "Ignored", "Optional"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 77,
    category: "public_car",
    question: {
      ar: "عند القيادة بسرعة:",
      fr: "À grande vitesse :",
      en: "At high speed:"
    },
    options: {
      ar: ["تزيد الخطورة", "تقل الخطورة", "لا تتغير"],
      fr: ["Le danger augmente", "Diminue", "Ne change pas"],
      en: ["Danger increases", "Decreases", "Does not change"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 78,
    category: "public_car",
    question: {
      ar: "يجب فحص المركبة:",
      fr: "Le véhicule doit être contrôlé :",
      en: "Vehicle must be checked:"
    },
    options: {
      ar: ["بشكل دوري", "نادراً", "غير ضروري"],
      fr: ["Régulièrement", "Rarement", "Inutile"],
      en: ["Regularly", "Rarely", "Not necessary"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 79,
    category: "public_car",
    question: {
      ar: "عند استخدام المكابح:",
      fr: "Lors de l'utilisation des freins :",
      en: "When using brakes:"
    },
    options: {
      ar: ["بهدوء", "بشكل مفاجئ دائماً", "بدون سبب"],
      fr: ["Doucement", "Toujours brusquement", "Sans raison"],
      en: ["Smoothly", "Always suddenly", "Without reason"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 80,
    category: "public_car",
    question: {
      ar: "عند الإشارة الخضراء:",
      fr: "Au feu vert :",
      en: "At green light:"
    },
    options: {
      ar: ["تتحرك بحذر", "تتوقف", "تسرع جداً"],
      fr: ["Avancer prudemment", "S’arrêter", "Accélérer fortement"],
      en: ["Move carefully", "Stop", "Speed fast"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 81,
    category: "public_car",
    question: {
      ar: "القيادة الدفاعية تعني:",
      fr: "La conduite défensive signifie :",
      en: "Defensive driving means:"
    },
    options: {
      ar: ["تجنب المخاطر", "زيادة السرعة", "عدم الانتباه"],
      fr: ["Éviter les dangers", "Accélérer", "Ne pas faire attention"],
      en: ["Avoid risks", "Speed up", "Ignore"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 82,
    category: "public_car",
    question: {
      ar: "يجب الانتباه إلى:",
      fr: "Il faut faire attention à :",
      en: "You must pay attention to:"
    },
    options: {
      ar: ["الطريق", "الهاتف", "الموسيقى"],
      fr: ["La route", "Le téléphone", "La musique"],
      en: ["Road", "Phone", "Music"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 83,
    category: "public_car",
    question: {
      ar: "عند رؤية حادث:",
      fr: "En cas d’accident :",
      en: "When seeing an accident:"
    },
    options: {
      ar: ["تساعد", "تتجاهل", "تسرع"],
      fr: ["Aider", "Ignorer", "Accélérer"],
      en: ["Help", "Ignore", "Speed"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 84,
    category: "public_car",
    question: {
      ar: "إشارات الشرطي:",
      fr: "Les signaux du policier :",
      en: "Police signals:"
    },
    options: {
      ar: ["تُحترم دائماً", "تُتجاهل", "اختيارية"],
      fr: ["Toujours respectés", "Ignorés", "Optionnels"],
      en: ["Always respected", "Ignored", "Optional"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 85,
    category: "public_car",
    question: {
      ar: "عند وجود ضباب:",
      fr: "En cas de brouillard :",
      en: "In fog:"
    },
    options: {
      ar: ["تشغيل الضوء المنخفض", "تشغيل العالي", "إطفاء"],
      fr: ["Feux de croisement", "Feux de route", "Éteindre"],
      en: ["Low beam", "High beam", "Off"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 86,
    category: "public_car",
    question: {
      ar: "الإشارات الضوئية:",
      fr: "Les feux :",
      en: "Lights:"
    },
    options: {
      ar: ["تنظم السير", "تربك السير", "غير مهمة"],
      fr: ["Organisent la circulation", "Perturbent", "Inutiles"],
      en: ["Organize traffic", "Disturb", "Useless"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 87,
    category: "public_car",
    question: {
      ar: "القوانين المرورية:",
      fr: "Les lois de circulation :",
      en: "Traffic laws:"
    },
    options: {
      ar: ["إلزامية", "اختيارية", "غير مهمة"],
      fr: ["Obligatoires", "Optionnelles", "Inutiles"],
      en: ["Mandatory", "Optional", "Not important"]
    },
    correct: 0
  },



  // 👉 truck 

  
  // 👉 safety

  {
    type: "normal",
    id: 1,
    category: "safety",
    question: {
      ar: "عند شعورك بالنعاس الشديد أثناء القيادة، عليك:",
      fr: "Lorsque vous ressentez une forte somnolence en conduisant :",
      en: "When you feel very sleepy while driving:"
    },
    options: {
      ar: ["متابعة القيادة", "تناول منشطات", "التوقف فوراً وأخذ قسط من الراحة"],
      fr: ["Continuer à conduire", "Prendre des stimulants", "S’arrêter immédiatement pour se reposer"],
      en: ["Continue driving", "Take stimulants", "Stop immediately and rest"]
    },
    correct: 2
  },

  {
    type: "normal",
    id: 2,
    category: "safety",
    question: {
      ar: "استخدام الهاتف أثناء القيادة:",
      fr: "L’utilisation du téléphone en conduisant :",
      en: "Using a phone while driving:"
    },
    options: {
      ar: ["آمن", "خطر", "مسموح دائماً"],
      fr: ["Sûr", "Dangereux", "Toujours autorisé"],
      en: ["Safe", "Dangerous", "Always allowed"]
    },
    correct: 1
  },

  {
    type: "normal",
    id: 3,
    category: "safety",
    question: {
      ar: "القيادة تحت تأثير الكحول:",
      fr: "Conduire sous l’effet de l’alcool :",
      en: "Driving under alcohol influence:"
    },
    options: {
      ar: ["ممنوع", "مسموح", "حسب الحالة"],
      fr: ["Interdit", "Autorisé", "Selon la situation"],
      en: ["Forbidden", "Allowed", "Depends"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 4,
    category: "safety",
    question: {
      ar: "المسافة الآمنة بين المركبات:",
      fr: "La distance de sécurité entre les véhicules :",
      en: "Safety distance between vehicles:"
    },
    options: {
      ar: ["غير مهمة", "تمنع الحوادث", "تقلل السرعة فقط"],
      fr: ["Pas importante", "Évite les accidents", "Réduit seulement la vitesse"],
      en: ["Not important", "Prevents accidents", "Only reduces speed"]
    },
    correct: 1
  },

  {
    type: "normal",
    id: 5,
    category: "safety",
    question: {
      ar: "عند انزلاق المركبة:",
      fr: "En cas de dérapage du véhicule :",
      en: "When the vehicle skids:"
    },
    options: {
      ar: ["الضغط بقوة على الفرامل", "توجيه المركبة بعكس الانزلاق", "زيادة السرعة"],
      fr: ["Freiner fortement", "Diriger dans le sens opposé", "Accélérer"],
      en: ["Brake hard", "Steer opposite to skid", "Accelerate"]
    },
    correct: 1
  },

  {
    type: "normal",
    id: 6,
    category: "safety",
    question: {
      ar: "ربط حزام الأمان:",
      fr: "Attacher la ceinture de sécurité :",
      en: "Wearing a seatbelt:"
    },
    options: {
      ar: ["اختياري", "إجباري", "غير مهم"],
      fr: ["Optionnel", "Obligatoire", "Pas important"],
      en: ["Optional", "Mandatory", "Not important"]
    },
    correct: 1
  },

  {
    type: "normal",
    id: 7,
    category: "safety",
    question: {
      ar: "عند القيادة تحت المطر:",
      fr: "En cas de pluie :",
      en: "When driving in rain:"
    },
    options: {
      ar: ["زيادة السرعة", "تخفيف السرعة", "عدم الانتباه"],
      fr: ["Accélérer", "Ralentir", "Ignorer"],
      en: ["Speed up", "Slow down", "Ignore"]
    },
    correct: 1
  },

  {
    type: "normal",
    id: 8,
    category: "safety",
    question: {
      ar: "الإرهاق أثناء القيادة يؤدي إلى:",
      fr: "La fatigue au volant entraîne :",
      en: "Fatigue while driving leads to:"
    },
    options: {
      ar: ["زيادة التركيز", "بطء ردات الفعل", "قيادة أفضل"],
      fr: ["Augmentation de concentration", "Réaction lente", "Meilleure conduite"],
      en: ["More focus", "Slower reaction", "Better driving"]
    },
    correct: 1
  },

  {
    type: "normal",
    id: 9,
    category: "safety",
    question: {
      ar: "السرعة الزائدة:",
      fr: "L’excès de vitesse :",
      en: "Speeding:"
    },
    options: {
      ar: ["آمن", "خطر", "مفيد"],
      fr: ["Sûr", "Dangereux", "Utile"],
      en: ["Safe", "Dangerous", "Useful"]
    },
    correct: 1
  },

  {
    type: "normal",
    id: 10,
    category: "safety",
    question: {
      ar: "عند القيادة ليلاً:",
      fr: "En conduisant la nuit :",
      en: "When driving at night:"
    },
    options: {
      ar: ["تشغيل الأضواء", "إطفاء الأضواء", "عدم الانتباه"],
      fr: ["Allumer les feux", "Éteindre", "Ignorer"],
      en: ["Turn lights on", "Turn off", "Ignore"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 11,
    category: "safety",
    question: {
      ar: "عند الضباب يجب:",
      fr: "En cas de brouillard :",
      en: "In fog:"
    },
    options: {
      ar: ["تشغيل الضوء المنخفض", "تشغيل الضوء العالي", "إطفاء الأضواء"],
      fr: ["Feux de croisement", "Feux de route", "Éteindre"],
      en: ["Low beam", "High beam", "Turn off"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 12,
    category: "safety",
    question: {
      ar: "القيادة الدفاعية تعني:",
      fr: "La conduite défensive signifie :",
      en: "Defensive driving means:"
    },
    options: {
      ar: ["تجنب المخاطر", "زيادة السرعة", "عدم الانتباه"],
      fr: ["Éviter les risques", "Accélérer", "Ignorer"],
      en: ["Avoid risks", "Speed up", "Ignore"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 13,
    category: "safety",
    question: {
      ar: "يجب الانتباه إلى:",
      fr: "Il faut faire attention à :",
      en: "You must pay attention to:"
    },
    options: {
      ar: ["الطريق", "الهاتف", "الموسيقى"],
      fr: ["La route", "Le téléphone", "La musique"],
      en: ["Road", "Phone", "Music"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 14,
    category: "safety",
    question: {
      ar: "عند رؤية حادث:",
      fr: "En cas d'accident :",
      en: "When seeing an accident:"
    },
    options: {
      ar: ["المساعدة", "التجاهل", "السرعة"],
      fr: ["Aider", "Ignorer", "Accélérer"],
      en: ["Help", "Ignore", "Speed"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 15,
    category: "safety",
    question: {
      ar: "إشارات الشرطي:",
      fr: "Les signaux du policier :",
      en: "Police signals:"
    },
    options: {
      ar: ["تُحترم دائماً", "تُتجاهل", "اختيارية"],
      fr: ["Toujours respectés", "Ignorés", "Optionnels"],
      en: ["Always respected", "Ignored", "Optional"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 16,
    category: "safety",
    question: {
      ar: "القيادة بسرعة عالية تؤدي إلى:",
      fr: "Conduire à grande vitesse entraîne :",
      en: "Driving at high speed leads to:"
    },
    options: {
      ar: ["زيادة الخطر", "تقليل الخطر", "لا تأثير"],
      fr: ["Augmentation du danger", "Réduction", "Aucun effet"],
      en: ["Increase danger", "Reduce danger", "No effect"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 17,
    category: "safety",
    question: {
      ar: "عند استخدام الفرامل:",
      fr: "Lors de l'utilisation des freins :",
      en: "When braking:"
    },
    options: {
      ar: ["بهدوء", "بشكل مفاجئ دائماً", "بدون سبب"],
      fr: ["Doucement", "Toujours brusquement", "Sans raison"],
      en: ["Smoothly", "Always suddenly", "Without reason"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 18,
    category: "safety",
    question: {
      ar: "المرايا:",
      fr: "Les rétroviseurs :",
      en: "Mirrors:"
    },
    options: {
      ar: ["مهمة للرؤية", "غير مهمة", "للزينة"],
      fr: ["Importants", "Inutiles", "Décor"],
      en: ["Important", "Not important", "Decoration"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 19,
    category: "safety",
    question: {
      ar: "الانتباه أثناء القيادة:",
      fr: "L’attention en conduisant :",
      en: "Attention while driving:"
    },
    options: {
      ar: ["ضروري", "غير مهم", "اختياري"],
      fr: ["Nécessaire", "Pas important", "Optionnel"],
      en: ["Necessary", "Not important", "Optional"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 20,
    category: "safety",
    question: {
      ar: "عند القيادة يجب:",
      fr: "En conduisant vous devez :",
      en: "When driving you must:"
    },
    options: {
      ar: ["التركيز", "الانشغال", "الإهمال"],
      fr: ["Se concentrer", "Se distraire", "Négliger"],
      en: ["Focus", "Be distracted", "Neglect"]
    },
    correct: 0
  }
  ,
  {
    type: "normal",
    id: 26,
    category: "safety",
    question: {
      ar: "عند تعبئة الوقود يجب:",
      fr: "Lors du remplissage du carburant, vous devez :",
      en: "When refueling, you must:"
    },
    options: {
      ar: ["إبقاء المحرك يعمل", "إطفاء المحرك", "التدخين"],
      fr: ["Laisser le moteur en marche", "Éteindre le moteur", "Fumer"],
      en: ["Keep engine running", "Turn off engine", "Smoke"]
    },
    correct: 1
  },

  {
    type: "normal",
    id: 27,
    category: "safety",
    question: {
      ar: "التعب أثناء القيادة يؤدي إلى:",
      fr: "La fatigue en conduisant entraîne :",
      en: "Fatigue while driving leads to:"
    },
    options: {
      ar: ["تحسين التركيز", "بطء في الاستجابة", "قيادة أفضل"],
      fr: ["Améliore la concentration", "Ralentit les réactions", "Améliore la conduite"],
      en: ["Improves focus", "Slows reaction", "Better driving"]
    },
    correct: 1
  },

  {
    type: "normal",
    id: 28,
    category: "safety",
    question: {
      ar: "عند القيادة في طريق زلق:",
      fr: "Sur une route glissante :",
      en: "On a slippery road:"
    },
    options: {
      ar: ["زيادة السرعة", "تخفيف السرعة", "عدم الانتباه"],
      fr: ["Accélérer", "Ralentir", "Ignorer"],
      en: ["Speed up", "Slow down", "Ignore"]
    },
    correct: 1
  },

  {
    type: "normal",
    id: 29,
    category: "safety",
    question: {
      ar: "حمل أوزان زائدة يؤدي إلى:",
      fr: "Transporter une charge excessive entraîne :",
      en: "Overloading a vehicle leads to:"
    },
    options: {
      ar: ["زيادة الأمان", "خطر على القيادة", "لا تأثير"],
      fr: ["Augmente la sécurité", "Risque pour la conduite", "Aucun effet"],
      en: ["More safety", "Danger to driving", "No effect"]
    },
    correct: 1
  },

  {
    type: "normal",
    id: 30,
    category: "safety",
    question: {
      ar: "الإطارات غير الجيدة:",
      fr: "Les pneus en mauvais état :",
      en: "Bad tires:"
    },
    options: {
      ar: ["آمنة", "خطيرة", "لا تؤثر"],
      fr: ["Sûrs", "Dangereux", "Sans effet"],
      en: ["Safe", "Dangerous", "No effect"]
    },
    correct: 1
  },

  {
    type: "normal",
    id: 31,
    category: "safety",
    question: {
      ar: "القيادة تحت المطر تتطلب:",
      fr: "Conduire sous la pluie nécessite :",
      en: "Driving in rain requires:"
    },
    options: {
      ar: ["زيادة السرعة", "الحذر", "عدم الانتباه"],
      fr: ["Accélérer", "Prudence", "Ignorer"],
      en: ["Speed up", "Caution", "Ignore"]
    },
    correct: 1
  },

  {
    type: "normal",
    id: 32,
    category: "safety",
    question: {
      ar: "استعمال الأضواء ليلاً:",
      fr: "L’utilisation des feux la nuit :",
      en: "Using lights at night:"
    },
    options: {
      ar: ["ضروري", "غير مهم", "اختياري"],
      fr: ["Nécessaire", "Pas important", "Optionnel"],
      en: ["Necessary", "Not important", "Optional"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 33,
    category: "safety",
    question: {
      ar: "القيادة بسرعة عالية:",
      fr: "Conduire à grande vitesse :",
      en: "Driving at high speed:"
    },
    options: {
      ar: ["آمن", "خطر", "مفيد"],
      fr: ["Sûr", "Dangereux", "Utile"],
      en: ["Safe", "Dangerous", "Useful"]
    },
    correct: 1
  },

  {
    type: "normal",
    id: 34,
    category: "safety",
    question: {
      ar: "عند القيادة يجب:",
      fr: "En conduisant vous devez :",
      en: "When driving you must:"
    },
    options: {
      ar: ["التركيز", "الإهمال", "الانشغال"],
      fr: ["Se concentrer", "Négliger", "Se distraire"],
      en: ["Focus", "Neglect", "Be distracted"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 35,
    category: "safety",
    question: {
      ar: "تجاهل إشارات المرور:",
      fr: "Ignorer les feux de circulation :",
      en: "Ignoring traffic signals:"
    },
    options: {
      ar: ["آمن", "خطر", "مسموح"],
      fr: ["Sûr", "Dangereux", "Autorisé"],
      en: ["Safe", "Dangerous", "Allowed"]
    },
    correct: 1
  },

  {
    type: "normal",
    id: 36,
    category: "safety",
    question: {
      ar: "القيادة الدفاعية تساعد على:",
      fr: "La conduite défensive aide à :",
      en: "Defensive driving helps to:"
    },
    options: {
      ar: ["تفادي الحوادث", "زيادة السرعة", "عدم الانتباه"],
      fr: ["Éviter les accidents", "Accélérer", "Ignorer"],
      en: ["Avoid accidents", "Speed up", "Ignore"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 37,
    category: "safety",
    question: {
      ar: "عند التعب:",
      fr: "En cas de fatigue :",
      en: "When tired:"
    },
    options: {
      ar: ["تستمر", "تتوقف", "تسرع"],
      fr: ["Continuer", "S’arrêter", "Accélérer"],
      en: ["Continue", "Stop", "Speed"]
    },
    correct: 1
  },

  {
    type: "normal",
    id: 38,
    category: "safety",
    question: {
      ar: "المرايا تساعد على:",
      fr: "Les rétroviseurs aident à :",
      en: "Mirrors help to:"
    },
    options: {
      ar: ["الرؤية", "الزينة", "الراحة"],
      fr: ["Voir", "Décorer", "Confort"],
      en: ["See", "Decorate", "Comfort"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 39,
    category: "safety",
    question: {
      ar: "القيادة بسرعة:",
      fr: "Conduire vite :",
      en: "Driving fast:"
    },
    options: {
      ar: ["خطر", "آمن", "مفيد"],
      fr: ["Dangereux", "Sûr", "Utile"],
      en: ["Dangerous", "Safe", "Useful"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 40,
    category: "safety",
    question: {
      ar: "عند الانعطاف يجب:",
      fr: "Lors d’un virage :",
      en: "When turning:"
    },
    options: {
      ar: ["تشغيل الإشارة", "عدم تشغيلها", "السرعة"],
      fr: ["Mettre le clignotant", "Ne pas le mettre", "Accélérer"],
      en: ["Use signal", "Do not signal", "Speed"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 41,
    category: "safety",
    question: {
      ar: "الأضواء:",
      fr: "Les feux :",
      en: "Lights:"
    },
    options: {
      ar: ["مهمة", "غير مهمة", "اختيارية"],
      fr: ["Importants", "Inutiles", "Optionnels"],
      en: ["Important", "Not important", "Optional"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 42,
    category: "safety",
    question: {
      ar: "القوانين المرورية:",
      fr: "Les lois de circulation :",
      en: "Traffic laws:"
    },
    options: {
      ar: ["إلزامية", "اختيارية", "غير مهمة"],
      fr: ["Obligatoires", "Optionnelles", "Inutiles"],
      en: ["Mandatory", "Optional", "Not important"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 43,
    category: "safety",
    question: {
      ar: "الانتباه:",
      fr: "L’attention :",
      en: "Attention:"
    },
    options: {
      ar: ["ضروري", "غير مهم", "اختياري"],
      fr: ["Nécessaire", "Pas important", "Optionnel"],
      en: ["Necessary", "Not important", "Optional"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 44,
    category: "safety",
    question: {
      ar: "عند رؤية خطر:",
      fr: "En cas de danger :",
      en: "When seeing danger:"
    },
    options: {
      ar: ["تتجنب", "تسرع", "تتجاهل"],
      fr: ["Éviter", "Accélérer", "Ignorer"],
      en: ["Avoid", "Speed", "Ignore"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 45,
    category: "safety",
    question: {
      ar: "التعب:",
      fr: "La fatigue :",
      en: "Fatigue:"
    },
    options: {
      ar: ["خطر", "آمن", "مفيد"],
      fr: ["Dangereux", "Sûr", "Utile"],
      en: ["Dangerous", "Safe", "Useful"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 46,
    category: "safety",
    question: {
      ar: "القيادة تحت الضغط:",
      fr: "Conduire sous pression :",
      en: "Driving under stress:"
    },
    options: {
      ar: ["خطر", "آمن", "مفيد"],
      fr: ["Dangereux", "Sûr", "Utile"],
      en: ["Dangerous", "Safe", "Useful"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 47,
    category: "safety",
    question: {
      ar: "الإهمال:",
      fr: "La négligence :",
      en: "Negligence:"
    },
    options: {
      ar: ["خطر", "آمن", "مفيد"],
      fr: ["Dangereux", "Sûr", "Utile"],
      en: ["Dangerous", "Safe", "Useful"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 48,
    category: "safety",
    question: {
      ar: "القيادة الجيدة:",
      fr: "Bonne conduite :",
      en: "Good driving:"
    },
    options: {
      ar: ["حذر", "سرعة", "إهمال"],
      fr: ["Prudence", "Vitesse", "Négligence"],
      en: ["Careful", "Speed", "Negligence"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 49,
    category: "safety",
    question: {
      ar: "التصرف الصحيح:",
      fr: "Le bon comportement :",
      en: "Correct behavior:"
    },
    options: {
      ar: ["حذر", "سرعة", "إهمال"],
      fr: ["Prudence", "Vitesse", "Négligence"],
      en: ["Careful", "Speed", "Negligence"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 50,
    category: "safety",
    question: {
      ar: "القيادة الآمنة:",
      fr: "Conduite sécurisée :",
      en: "Safe driving:"
    },
    options: {
      ar: ["حذر", "سرعة", "إهمال"],
      fr: ["Prudence", "Vitesse", "Négligence"],
      en: ["Careful", "Speed", "Negligence"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 51,
    category: "safety",
    question: {
      ar: "القوانين:",
      fr: "Les lois :",
      en: "Laws:"
    },
    options: {
      ar: ["تُحترم", "تُهمل", "اختيارية"],
      fr: ["Respectées", "Ignorées", "Optionnelles"],
      en: ["Respected", "Ignored", "Optional"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 52,
    category: "safety",
    question: {
      ar: "الأمان:",
      fr: "La sécurité :",
      en: "Safety:"
    },
    options: {
      ar: ["ضروري", "غير مهم", "اختياري"],
      fr: ["Nécessaire", "Pas important", "Optionnel"],
      en: ["Necessary", "Not important", "Optional"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 53,
    category: "safety",
    question: {
      ar: "القيادة:",
      fr: "La conduite :",
      en: "Driving:"
    },
    options: {
      ar: ["مسؤولية", "لعبة", "غير مهمة"],
      fr: ["Responsabilité", "Jeu", "Inutile"],
      en: ["Responsibility", "Game", "Not important"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 54,
    category: "safety",
    question: {
      ar: "التجاوز:",
      fr: "Dépassement :",
      en: "Overtaking:"
    },
    options: {
      ar: ["بحذر", "بسرعة", "بدون انتباه"],
      fr: ["Prudemment", "Rapidement", "Sans attention"],
      en: ["Carefully", "Fast", "Without attention"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 55,
    category: "safety",
    question: {
      ar: "الطريق:",
      fr: "La route :",
      en: "Road:"
    },
    options: {
      ar: ["خطر", "آمنة دائماً", "غير مهمة"],
      fr: ["Dangereuse", "Toujours sûre", "Inutile"],
      en: ["Dangerous", "Always safe", "Not important"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 56,
    category: "safety",
    question: {
      ar: "السرعة:",
      fr: "La vitesse :",
      en: "Speed:"
    },
    options: {
      ar: ["تحدد حسب الطريق", "دائماً عالية", "غير مهمة"],
      fr: ["Selon la route", "Toujours élevée", "Pas importante"],
      en: ["Depends on road", "Always high", "Not important"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 57,
    category: "safety",
    question: {
      ar: "الحذر:",
      fr: "La prudence :",
      en: "Caution:"
    },
    options: {
      ar: ["ضروري", "غير مهم", "اختياري"],
      fr: ["Nécessaire", "Inutile", "Optionnel"],
      en: ["Necessary", "Not important", "Optional"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 58,
    category: "safety",
    question: {
      ar: "القيادة الجيدة تعتمد على:",
      fr: "La bonne conduite dépend de :",
      en: "Good driving depends on:"
    },
    options: {
      ar: ["الانتباه", "السرعة", "الإهمال"],
      fr: ["Attention", "Vitesse", "Négligence"],
      en: ["Attention", "Speed", "Negligence"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 59,
    category: "safety",
    question: {
      ar: "الأخطاء أثناء القيادة:",
      fr: "Les erreurs de conduite :",
      en: "Driving mistakes:"
    },
    options: {
      ar: ["خطيرة", "آمنة", "مفيدة"],
      fr: ["Dangereuses", "Sûres", "Utiles"],
      en: ["Dangerous", "Safe", "Useful"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 60,
    category: "safety",
    question: {
      ar: "السلامة المرورية:",
      fr: "La sécurité routière :",
      en: "Road safety:"
    },
    options: {
      ar: ["مهمة جداً", "غير مهمة", "اختيارية"],
      fr: ["Très importante", "Pas importante", "Optionnelle"],
      en: ["Very important", "Not important", "Optional"]
    },
    correct: 0
  }

,
  {
    type: "normal",
    id: 61,
    category: "safety",
    question: {
      ar: "عند القيادة خلف مركبة ثقيلة يجب:",
      fr: "En conduisant derrière un véhicule lourd, vous devez :",
      en: "When driving behind a heavy vehicle, you must:"
    },
    options: {
      ar: ["الاقتراب منها", "ترك مسافة أمان كافية", "التجاوز فوراً"],
      fr: ["Se rapprocher", "Garder une distance de sécurité", "Dépasser immédiatement"],
      en: ["Get closer", "Keep a safe distance", "Overtake immediately"]
    },
    correct: 1
  },

  {
    type: "normal",
    id: 62,
    category: "safety",
    question: {
      ar: "عند الانعطاف بسرعة عالية:",
      fr: "En prenant un virage à grande vitesse :",
      en: "When turning at high speed:"
    },
    options: {
      ar: ["تزيد السيطرة", "تقل السيطرة", "لا تأثير"],
      fr: ["Le contrôle augmente", "Le contrôle diminue", "Aucun effet"],
      en: ["Control increases", "Control decreases", "No effect"]
    },
    correct: 1
  },

  {
    type: "normal",
    id: 63,
    category: "safety",
    question: {
      ar: "المكابح الجيدة تساعد على:",
      fr: "De bons freins permettent de :",
      en: "Good brakes help to:"
    },
    options: {
      ar: ["التوقف بسرعة وأمان", "زيادة السرعة", "توفير الوقود"],
      fr: ["S’arrêter rapidement et en sécurité", "Augmenter la vitesse", "Économiser du carburant"],
      en: ["Stop quickly and safely", "Increase speed", "Save fuel"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 64,
    category: "safety",
    question: {
      ar: "عند القيادة في الليل يجب الانتباه إلى:",
      fr: "En conduisant la nuit, vous devez faire attention à :",
      en: "When driving at night, you must pay attention to:"
    },
    options: {
      ar: ["ضعف الرؤية", "زيادة الرؤية", "عدم وجود خطر"],
      fr: ["La visibilité réduite", "Une meilleure visibilité", "Aucun danger"],
      en: ["Reduced visibility", "Better visibility", "No danger"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 65,
    category: "safety",
    question: {
      ar: "عند الاقتراب من مدرسة يجب:",
      fr: "À l’approche d’une école :",
      en: "When approaching a school:"
    },
    options: {
      ar: ["زيادة السرعة", "تخفيف السرعة والانتباه", "استخدام البوق"],
      fr: ["Accélérer", "Ralentir et être vigilant", "Utiliser le klaxon"],
      en: ["Speed up", "Slow down and be alert", "Use horn"]
    },
    correct: 1
  },

  {
    type: "normal",
    id: 66,
    category: "safety",
    question: {
      ar: "عند وجود أطفال على الطريق:",
      fr: "En présence d’enfants sur la route :",
      en: "When children are on the road:"
    },
    options: {
      ar: ["تزيد السرعة", "تكون أكثر حذراً", "تتجاهلهم"],
      fr: ["Accélérer", "Être plus prudent", "Les ignorer"],
      en: ["Speed up", "Be more careful", "Ignore them"]
    },
    correct: 1
  },

  {
    type: "normal",
    id: 67,
    category: "safety",
    question: {
      ar: "عند تعب السائق:",
      fr: "Lorsque le conducteur est fatigué :",
      en: "When the driver is tired:"
    },
    options: {
      ar: ["يستمر", "يتوقف", "يسرع"],
      fr: ["Continuer", "S’arrêter", "Accélérer"],
      en: ["Continue", "Stop", "Speed up"]
    },
    correct: 1
  },

  {
    type: "normal",
    id: 68,
    category: "safety",
    question: {
      ar: "الطريق الزلق يزيد من:",
      fr: "Une route glissante augmente :",
      en: "A slippery road increases:"
    },
    options: {
      ar: ["السيطرة", "خطر الانزلاق", "السرعة"],
      fr: ["Le contrôle", "Le risque de dérapage", "La vitesse"],
      en: ["Control", "Risk of skidding", "Speed"]
    },
    correct: 1
  },

  {
    type: "normal",
    id: 69,
    category: "safety",
    question: {
      ar: "عند التجاوز يجب:",
      fr: "Lors d’un dépassement :",
      en: "When overtaking:"
    },
    options: {
      ar: ["التأكد من الطريق", "عدم النظر", "زيادة السرعة فقط"],
      fr: ["Vérifier la route", "Ne pas regarder", "Seulement accélérer"],
      en: ["Check road", "Do not look", "Only speed"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 70,
    category: "safety",
    question: {
      ar: "القيادة تحت المطر تتطلب:",
      fr: "La conduite sous la pluie nécessite :",
      en: "Driving in rain requires:"
    },
    options: {
      ar: ["حذر", "سرعة", "إهمال"],
      fr: ["Prudence", "Vitesse", "Négligence"],
      en: ["Caution", "Speed", "Negligence"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 71,
    category: "safety",
    question: {
      ar: "في حالة الضباب:",
      fr: "En cas de brouillard :",
      en: "In fog:"
    },
    options: {
      ar: ["تزيد السرعة", "تخفف السرعة", "تطفئ الأضواء"],
      fr: ["Accélérer", "Ralentir", "Éteindre les feux"],
      en: ["Speed up", "Slow down", "Turn off lights"]
    },
    correct: 1
  },

  {
    type: "normal",
    id: 72,
    category: "safety",
    question: {
      ar: "عند القيادة خلف دراجة نارية:",
      fr: "En conduisant derrière une moto :",
      en: "When driving behind a motorcycle:"
    },
    options: {
      ar: ["الاقتراب", "ترك مسافة", "التجاوز مباشرة"],
      fr: ["Se rapprocher", "Garder une distance", "Dépasser immédiatement"],
      en: ["Get closer", "Keep distance", "Overtake immediately"]
    },
    correct: 1
  },

  {
    type: "normal",
    id: 73,
    category: "safety",
    question: {
      ar: "عند الانتباه للطريق:",
      fr: "En prêtant attention à la route :",
      en: "Paying attention to the road:"
    },
    options: {
      ar: ["تقل الحوادث", "تزيد الحوادث", "لا فرق"],
      fr: ["Réduit les accidents", "Augmente les accidents", "Aucune différence"],
      en: ["Reduces accidents", "Increases accidents", "No difference"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 74,
    category: "safety",
    question: {
      ar: "عند وجود خطر:",
      fr: "En cas de danger :",
      en: "When danger appears:"
    },
    options: {
      ar: ["تتجنب", "تسرع", "تتجاهل"],
      fr: ["Éviter", "Accélérer", "Ignorer"],
      en: ["Avoid", "Speed", "Ignore"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 75,
    category: "safety",
    question: {
      ar: "التصرف الصحيح أثناء القيادة:",
      fr: "Le bon comportement en conduisant :",
      en: "Correct behavior while driving:"
    },
    options: {
      ar: ["حذر", "إهمال", "سرعة"],
      fr: ["Prudence", "Négligence", "Vitesse"],
      en: ["Careful", "Negligence", "Speed"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 76,
    category: "safety",
    question: {
      ar: "عند القيادة بسرعة عالية:",
      fr: "En conduisant à grande vitesse :",
      en: "Driving at high speed:"
    },
    options: {
      ar: ["يزداد الخطر", "يقل الخطر", "لا يتغير"],
      fr: ["Le danger augmente", "Diminue", "Ne change pas"],
      en: ["Danger increases", "Decreases", "No change"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 77,
    category: "safety",
    question: {
      ar: "الطريق المبللة:",
      fr: "Route mouillée :",
      en: "Wet road:"
    },
    options: {
      ar: ["آمنة", "خطرة", "أفضل"],
      fr: ["Sûre", "Dangereuse", "Meilleure"],
      en: ["Safe", "Dangerous", "Better"]
    },
    correct: 1
  },

  {
    type: "normal",
    id: 78,
    category: "safety",
    question: {
      ar: "المسافة الآمنة:",
      fr: "Distance de sécurité :",
      en: "Safety distance:"
    },
    options: {
      ar: ["مهمة", "غير مهمة", "اختيارية"],
      fr: ["Importante", "Pas importante", "Optionnelle"],
      en: ["Important", "Not important", "Optional"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 79,
    category: "safety",
    question: {
      ar: "عند القيادة يجب تجنب:",
      fr: "En conduisant, vous devez éviter :",
      en: "While driving, you must avoid:"
    },
    options: {
      ar: ["الإهمال", "الانتباه", "الحذر"],
      fr: ["La négligence", "L’attention", "La prudence"],
      en: ["Negligence", "Attention", "Caution"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 80,
    category: "safety",
    question: {
      ar: "القيادة الآمنة تعتمد على:",
      fr: "La conduite sûre dépend de :",
      en: "Safe driving depends on:"
    },
    options: {
      ar: ["الانتباه", "السرعة", "الإهمال"],
      fr: ["Attention", "Vitesse", "Négligence"],
      en: ["Attention", "Speed", "Negligence"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 81,
    category: "safety",
    question: {
      ar: "عند وجود مشاة:",
      fr: "En présence de piétons :",
      en: "When pedestrians are present:"
    },
    options: {
      ar: ["تعطيهم الأولوية", "تسرع", "تتجاهل"],
      fr: ["Leur donner la priorité", "Accélérer", "Ignorer"],
      en: ["Give priority", "Speed up", "Ignore"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 82,
    category: "safety",
    question: {
      ar: "عند القيادة يجب:",
      fr: "En conduisant, vous devez :",
      en: "When driving, you must:"
    },
    options: {
      ar: ["التركيز", "الإهمال", "التشتت"],
      fr: ["Se concentrer", "Négliger", "Se distraire"],
      en: ["Focus", "Neglect", "Be distracted"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 83,
    category: "safety",
    question: {
      ar: "القوانين المرورية:",
      fr: "Les lois de circulation :",
      en: "Traffic laws:"
    },
    options: {
      ar: ["إلزامية", "اختيارية", "غير مهمة"],
      fr: ["Obligatoires", "Optionnelles", "Inutiles"],
      en: ["Mandatory", "Optional", "Not important"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 84,
    category: "safety",
    question: {
      ar: "عند رؤية إشارة خطر:",
      fr: "En voyant un panneau de danger :",
      en: "When seeing a danger sign:"
    },
    options: {
      ar: ["تنتبه", "تسرع", "تتجاهل"],
      fr: ["Être vigilant", "Accélérer", "Ignorer"],
      en: ["Be alert", "Speed", "Ignore"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 85,
    category: "safety",
    question: {
      ar: "القيادة بحذر:",
      fr: "Conduire prudemment :",
      en: "Driving carefully:"
    },
    options: {
      ar: ["مهم", "غير مهم", "اختياري"],
      fr: ["Important", "Pas important", "Optionnel"],
      en: ["Important", "Not important", "Optional"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 86,
    category: "safety",
    question: {
      ar: "الانتباه للطريق:",
      fr: "Faire attention à la route :",
      en: "Paying attention to the road:"
    },
    options: {
      ar: ["ضروري", "غير مهم", "اختياري"],
      fr: ["Nécessaire", "Pas important", "Optionnel"],
      en: ["Necessary", "Not important", "Optional"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 87,
    category: "safety",
    question: {
      ar: "السلامة المرورية:",
      fr: "La sécurité routière :",
      en: "Road safety:"
    },
    options: {
      ar: ["مهمة جداً", "غير مهمة", "اختيارية"],
      fr: ["Très importante", "Pas importante", "Optionnelle"],
      en: ["Very important", "Not important", "Optional"]
    },
    correct: 0
  },
    {
    type: "normal",
    id: 1,
    category: "minibus",
    question: {
      ar: "ما هو تعريف الباص من الفئة 1D في قانون السير اللبناني؟",
      fr: "Quelle est la définition du bus de catégorie D1 dans le code de la route libanais ?",
      en: "What is the definition of a Category D1 bus under Lebanese Traffic Law?"
    },
    options: {
      ar: [
        "مركبة لنقل البضائع يتجاوز وزنها 3500 كلغ.",
        "مركبة لنقل الركاب تتسع لـ 24 راكباً.",
        "مركبة لنقل الركاب تضم أكثر من 8 مقاعد ولا تتعدى 16 مقعداً عدا مقعد السائق."
      ],
      fr: [
        "Un véhicule pour le transport de marchandises dont le poids dépasse 3500 kg.",
        "Un véhicule pour le transport de passagers pouvant accueillir 24 passagers.",
        "Un véhicule pour le transport de passagers comprenant plus de 8 sièges et ne dépassant pas 16 sièges, sans compter le siège du conducteur."
      ],
      en: [
        "A vehicle for transporting goods weighing more than 3500 kg.",
        "A vehicle for transporting passengers that holds up to 24 passengers.",
        "A vehicle for transporting passengers comprising more than 8 seats and not exceeding 16 seats, excluding the driver's seat."
      ]
    },
    correct: 2
  },
  {
    type: "normal",
    id: 2,
    category: "minibus",
    question: {
      ar: "ما هو السن الأدنى المطلوب للحصول على رخصة سوق عمومية من الفئة 1D؟",
      fr: "Quel est l'âge minimum requis pour obtenir un permis de conduire public de catégorie D1 ?",
      en: "What is the minimum age required to obtain a Category D1 public driving license?"
    },
    options: {
      ar: ["20 سنة.", "21 سنة.", "25 سنة."],
      fr: ["20 ans.", "21 ans.", "25 ans."],
      en: ["20 years.", "21 years.", "25 years."]
    },
    correct: 1
  },
  {
    type: "normal",
    id: 3,
    category: "minibus",
    question: {
      ar: "هل يسمح لسائق باص من الفئة 1D أن يجر مقطورة خلف الباص؟",
      fr: "Un conducteur de bus de catégorie D1 est-il autorisé à tracter une remorque derrière le bus ?",
      en: "Is a Category D1 bus driver permitted to tow a trailer behind the bus?"
    },
    options: {
      ar: [
        "نعم، بشرط ألا يتجاوز وزن المقطورة 750 كلغ.",
        "لا، يمنع جر أي مقطورة مهما كان وزنها.",
        "نعم، بشرط أن تكون مخصصة للركاب."
      ],
      fr: [
        "Oui, à condition que le poids de la remorque ne dépasse pas 750 kg.",
        "Non, il est interdit de tracter une remorque quel que soit son poids.",
        "Oui, à condition qu'elle soit destinée aux passagers."
      ],
      en: [
        "Yes, provided that the weight of the trailer does not exceed 750 kg.",
        "No, towing any trailer is prohibited regardless of its weight.",
        "Yes, provided that it is designated for passengers."
      ]
    },
    correct: 1
  },
  {
    type: "normal",
    id: 4,
    category: "minibus",
    question: {
      ar: "ما مدة صلاحية رخصة سوق عمومية من الفئة 1D للسائقين دون سن الخمسين؟",
      fr: "Quelle est la durée de validité d'un permis de conduire public de catégorie D1 pour les conducteurs de moins de cinquante ans ?",
      en: "What is the validity period of a Category D1 public driving license for drivers under the age of fifty?"
    },
    options: {
      ar: ["سنتان.", "5 سنوات.", "10 سنوات."],
      fr: ["2 ans.", "5 ans.", "10 ans."],
      en: ["Two years.", "5 years.", "10 years."]
    },
    correct: 1
  },
  {
    type: "normal",
    id: 5,
    category: "minibus",
    question: {
      ar: "ما مدة صلاحية رخصة سوق عمومية من الفئة 1D للسائقين بين سن الخمسين وسن الخمس وستين؟",
      fr: "Quelle est la durée de validité d'un permis de conduire public de catégorie D1 pour les conducteurs âgés entre cinquante et soixante-cinq ans ?",
      en: "What is the validity period of a Category D1 public driving license for drivers between the ages of fifty and sixty-five?"
    },
    options: {
      ar: ["سنتان.", "3 سنوات.", "5 سنوات."],
      fr: ["2 ans.", "3 ans.", "5 ans."],
      en: ["Two years.", "3 years.", "5 years."]
    },
    correct: 1
  },
  {
    type: "normal",
    id: 6,
    category: "minibus",
    question: {
      ar: "ما مدة صلاحية رخصة سوق عمومية من الفئة 1D للسائقين بعد سن الخمس وستين؟",
      fr: "Quelle est la durée de validité d'un permis de conduire public de catégorie D1 pour les conducteurs après l'âge de soixante-cinq ans ?",
      en: "What is the validity period of a Category D1 public driving license for drivers over the age of sixty-five?"
    },
    options: {
      ar: ["سنتان.", "3 سنوات.", "5 سنوات."],
      fr: ["2 ans.", "3 ans.", "5 ans."],
      en: ["Two years.", "3 years.", "5 years."]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 7,
    category: "minibus",
    question: {
      ar: "ما هي التجهيزات الإجبارية التي يجب توافرها في باص من فئة 1D لنقل الركاب؟",
      fr: "Quels sont les équipements obligatoires qui doivent être disponibles dans un bus de catégorie D1 pour le transport de passagers ?",
      en: "What is the mandatory equipment that must be available in a Category D1 bus for passenger transport?"
    },
    options: {
      ar: [
        "جهاز تلفاز للركاب.",
        "ستائر داكنة جداً على النوافذ.",
        "جهازي إطفاء حريق، حقيبة إسعافات أولية، ومثلث التحذير."
      ],
      fr: [
        "Un téléviseur pour les passagers.",
        "Des rideaux très sombres sur les fenêtres.",
        "Deux extincteurs, une trousse de premiers secours et un triangle de signalisation."
      ],
      en: [
        "A television set for passengers.",
        "Very dark curtains on the windows.",
        "Two fire extinguishers, a first aid kit, and a warning triangle."
      ]
    },
    correct: 2
  },
  {
    type: "normal",
    id: 8,
    category: "minibus",
    question: {
      ar: "أين يجب وضع لوحة التسجيل في باصات الفئة 1D؟",
      fr: "Où la plaque d'immatriculation doit-elle être placée sur les bus de catégorie D1 ?",
      en: "Where must the registration plate be placed on Category D1 buses?"
    },
    options: {
      ar: [
        "في مقدمة ومؤخرة الباص فقط.",
        "في مقدمة ومؤخرة الباص وقرب السائق.",
        "في مقدمة ومؤخرة وإلى جانب الباص."
      ],
      fr: [
        "À l'avant et à l'arrière du bus uniquement.",
        "À l'avant et à l'arrière du bus et près du conducteur.",
        "À l'avant, à l'arrière et sur le côté du bus."
      ],
      en: [
        "At the front and rear of the bus only.",
        "At the front and rear of the bus and near the driver.",
        "At the front, rear, and on the side of the bus."
      ]
    },
    correct: 1
  },
  {
    type: "normal",
    id: 9,
    category: "minibus",
    question: {
      ar: "ما هو الإجراء القانوني الصحيح عند توقف الباص لإنزال وإصعاد الركاب؟",
      fr: "Quelle est la procédure légale correcte lors de l'arrêt du bus pour faire monter et descendre des passagers ?",
      en: "What is the correct legal procedure when stopping the bus to pick up or drop off passengers?"
    },
    options: {
      ar: [
        "الاقتراب قدر الإمكان من الحافة اليمنى للطريق.",
        "التوقف بناءً على طلب الراكب وفي المكان الذي يحدده.",
        "التوقف في أي مساحة مناسبة لتسهيل النزول والصعود."
      ],
      fr: [
        "S'approcher autant que possible du bord droit de la route.",
        "S'arrêter à la demande du passager et à l'endroit qu'il détermine.",
        "S'arrêter dans n'importe quel espace approprié pour faciliter la descente et la montée."
      ],
      en: [
        "Approach the right edge of the road as much as possible.",
        "Stop based on the passenger's request and at the specific location they determine.",
        "Stop in any suitable area to facilitate getting on and off."
      ]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 10,
    category: "minibus",
    question: {
      ar: "متى يجب إجراء المعاينة الميكانيكية لباصات الفئة 1D العمومية؟",
      fr: "Quand l'inspection mécanique doit-elle être effectuée pour les bus publics de catégorie D1 ?",
      en: "When must the mechanical inspection be performed for Category D1 public buses?"
    },
    options: {
      ar: [
        "مرة كل سنة.",
        "مرة كل سنتين للباصات التي يقل تاريخ صنعها عن عشر سنوات.",
        "مرة كل سنتين للباصات التي يقل تاريخ صنعها عن خمس سنوات."
      ],
      fr: [
        "Une fois par an.",
        "Une fois tous les deux ans pour les bus dont la date de fabrication est inférieure à dix ans.",
        "Une fois tous les deux ans pour les bus dont la date de fabrication est inférieure à cinq ans."
      ],
      en: [
        "Once every year.",
        "Once every two years for buses manufactured less than ten years ago.",
        "Once every two years for buses manufactured less than five years ago."
      ]
    },
    correct: 1
  },
  {
    type: "normal",
    id: 11,
    category: "minibus",
    question: {
      ar: "في حال وجود عطل في أضواء الكابح، ماذا يجب على سائق باص من فئة 1D أن يفعل؟",
      fr: "En cas de panne des feux de stop, que doit faire un conducteur de bus de catégorie D1 ?",
      en: "In the event of a brake light malfunction, what must a Category D1 bus driver do?"
    },
    options: {
      ar: [
        "الاستمرار في القيادة بحذر حتى انتهاء الدوام.",
        "إصلاح العطل فوراً وعدم السير بالمركبة في حال شكل ذلك خطراً.",
        "استخدام أضواء التنبيه وإخراج اليد من النافذة عند كل توقف."
      ],
      fr: [
        "Continuer à conduire prudemment jusqu'à la fin des heures de travail.",
        "Réparer la panne immédiatement et ne pas circuler avec le véhicule si cela présente un danger.",
        "Utiliser les feux de détresse et sortir la main par la fenêtre à chaque arrêt."
      ],
      en: [
        "Continue driving cautiously until the end of the shift.",
        "Repair the malfunction immediately and do not drive the vehicle if doing so poses a danger.",
        "Use hazard lights and stick a hand out of the window at every stop."
      ]
    },
    correct: 1
  },
  {
    type: "normal",
    id: 12,
    category: "minibus",
    question: {
      ar: "أي من هذه الشروط ضروري للحصول على رخصة سوق عمومية لباص من فئة 1D؟",
      fr: "Laquelle de ces conditions est nécessaire pour obtenir un permis de conduire public pour un bus de catégorie D1 ?",
      en: "Which of these conditions is necessary to obtain a Category D1 public bus driving license?"
    },
    options: {
      ar: [
        "أن يجيد لغة أجنبية إضافة إلى العربية.",
        "أن لا يكون محتاجاً لنظارات طبية.",
        "أن يكون لديه رخصة سوق سيارة فئة B عمومية."
      ],
      fr: [
        "Maîtriser une langue étrangère en plus de l'arabe.",
        "Ne pas avoir besoin de lunettes médicales.",
        "Être titulaire d'un permis de conduire de voiture catégorie B publique."
      ],
      en: [
        "Must be fluent in a foreign language in addition to Arabic.",
        "Must not require medical glasses.",
        "Must hold a Category B public car driving license."
      ]
    },
    correct: 2
  },
  {
    type: "normal",
    id: 13,
    category: "minibus",
    question: {
      ar: "ما هي النسبة المسموحة للكحول في دم سائق مركبة نقل ركاب (1D) أثناء القيادة؟",
      fr: "Quel est le taux d'alcoolémie autorisé dans le sang d'un conducteur de véhicule de transport de passagers (D1) pendant la conduite ?",
      en: "What is the permitted blood alcohol concentration for a driver of a passenger vehicle (D1) while driving?"
    },
    options: {
      ar: ["صفر غ/لتر.", "0.2 غ/لتر.", "0.5 غ/لتر."],
      fr: ["Zéro g/litre.", "0,2 g/litre.", "0,5 g/litre."],
      en: ["Zero g/liter.", "0.2 g/liter.", "0.5 g/liter."]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 14,
    category: "minibus",
    question: {
      ar: "ماذا يعني وجود خطين متواصلين في وسط الطريق لسائق الباص؟",
      fr: "Que signifie la présence de deux lignes continues au milieu de la route pour un conducteur de bus ?",
      en: "What does the presence of two continuous lines in the middle of the road mean for a bus driver?"
    },
    options: {
      ar: [
        "يمنع التجاوز لكن يمكن التدوير (tour demi) فوقها.",
        "يمنع التجاوز لكن يمكن الالتفاف (turn-U) فوقها.",
        "يمنع التجاوز أو اجتياز الخطين تماماً."
      ],
      fr: [
        "Le dépassement est interdit mais il est possible de faire demi-tour par-dessus.",
        "Le dépassement est interdit mais il est possible de faire un U-turn par-dessus.",
        "Le dépassement ou le franchissement total des deux lignes est interdit."
      ],
      en: [
        "Overtaking is prohibited, but turning (demi tour) over them is possible.",
        "Overtaking is prohibited, but turning (U-turn) over them is possible.",
        "Overtaking or crossing the two lines is completely prohibited."
      ]
    },
    correct: 2
  },
  {
    type: "normal",
    id: 15,
    category: "minibus",
    question: {
      ar: "في حال تعطل الباص في نفق، ما هو الإجراء الأول؟",
      fr: "En cas de panne du bus dans un tunnel, quelle est la première procédure ?",
      en: "If the bus breaks down in a tunnel, what is the first procedure?"
    },
    options: {
      ar: [
        "تشغيل أضواء التنبيه والطلب من الركاب المساعدة في دفع الباص إلى موقع آمن.",
        "تشغيل أضواء التنبيه والاتصال بخدمة القطر مع إبقاء الركاب هادئين داخل الباص.",
        "تشغيل أضواء الطوارئ (الرباعي) ومحاولة إخراج الركاب لمكان آمن إذا كان ذلك ممكناً."
      ],
      fr: [
        "Allumer les feux de détresse et demander aux passagers d'aider à pousser le bus vers un endroit sûr.",
        "Allumer les feux de détresse et appeler le service de remorquage tout en gardant les passagers calmes à l'intérieur du bus.",
        "Allumer les feux de détresse (les quatre clignotants) et tenter de faire sortir les passagers vers un endroit sûr si cela est possible."
      ],
      en: [
        "Turn on hazard lights and ask passengers to help push the bus to a safe location.",
        "Turn on hazard lights, contact towing services, and keep passengers calm inside the bus.",
        "Turn on hazard lights (four-way flashers) and attempt to evacuate passengers to a safe place if possible."
      ]
    },
    correct: 2
  },
  {
    type: "normal",
    id: 16,
    category: "minibus",
    question: {
      ar: "ما هي المسافة الدنيا التي يجب تركها بين باص من فئة 1D والمركبة التي أمامه؟",
      fr: "Quelle est la distance minimale à laisser entre un bus de catégorie D1 et le véhicule qui le précède ?",
      en: "What is the minimum distance that must be left between a Category D1 bus and the vehicle in front of it?"
    },
    options: {
      ar: [
        "مسافة الأمان (قاعدة الثانيتين أو أكثر حسب السرعة).",
        "ضعفي طول الباص.",
        "ثلاثة أضعاف طول الباص."
      ],
      fr: [
        "La distance de sécurité (règle des deux secondes ou plus selon la vitesse).",
        "Deux fois la longueur du bus.",
        "Trois fois la longueur du bus."
      ],
      en: [
        "The safety distance (the two-second rule or more depending on speed).",
        "Twice the length of the bus.",
        "Three times the length of the bus."
      ]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 17,
    category: "minibus",
    question: {
      ar: "هل يجب على ركاب الباص (1D) وضع حزام الأمان؟",
      fr: "Le passager du bus (D1) doit-il mettre la ceinture de sécurité ?",
      en: "Must passengers of a (D1) bus wear a seatbelt?"
    },
    options: {
      ar: [
        "نعم، جميع الركاب ملزمون بوضع الحزام إذا كان الباص مجهزاً بها.",
        "لا داعي لاستخدام أحزمة الأمان، لأن الباص ثقيل وآمن.",
        "فقط عند السير بسرعة تفوق 100 كم/س."
      ],
      fr: [
        "Oui, tous les passagers sont obligés de mettre la ceinture si le bus en est équipé.",
        "Pas besoin d'utiliser les ceintures de sécurité, car le bus est lourd et sûr.",
        "Seulement en roulant à une vitesse supérieure à 100 km/h."
      ],
      en: [
        "Yes, all passengers are required to wear the belt if the bus is equipped with them.",
        "No need to use safety belts because the bus is heavy and safe.",
        "Only when driving at a speed exceeding 100 km/h."
      ]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 18,
    category: "minibus",
    question: {
      ar: "ما هو اللون المخصص للوحة تسجيل الباصات العمومية في لبنان؟",
      fr: "Quelle est la couleur réservée à la plaque d'immatriculation des bus publics au Liban ?",
      en: "What is the designated color for the registration plate of public buses in Lebanon?"
    },
    options: {
      ar: [
        "الأرقام بالأحمر مع طرف اللوحة أحمر.",
        "الأرقام بالكحلي مع طرف اللوحة أحمر.",
        "الأرقام بالأحمر مع طرف اللوحة أبيض."
      ],
      fr: [
        "Les chiffres en rouge avec le bord de la plaque en rouge.",
        "Les chiffres en bleu marine avec le bord de la plaque en rouge.",
        "Les chiffres en rouge avec le bord de la plaque en blanc."
      ],
      en: [
        "Red numbers with a red edge.",
        "Navy blue numbers with a red edge.",
        "Red numbers with a white edge."
      ]
    },
    correct: 1
  },
  {
    type: "normal",
    id: 19,
    category: "minibus",
    question: {
      ar: "من أي جهة يجب على الركاب الصعود إلى الباص؟",
      fr: "De quel côté les passagers doivent-ils monter dans le bus ?",
      en: "From which side must passengers board the bus?"
    },
    options: {
      ar: [
        "من أي جهة يختاروها شرط ألا يعيق السير.",
        "من الجهة اليمنى المحاذية للرصيف إذا وجد.",
        "من الجهة اليمنى."
      ],
      fr: [
        "Du côté qu'ils choisissent à condition de ne pas gêner la circulation.",
        "Du côté droit adjacent au trottoir s'il existe.",
        "Du côté droit."
      ],
      en: [
        "From any side they choose provided it does not obstruct traffic.",
        "From the right side adjacent to the sidewalk if available.",
        "From the right side."
      ]
    },
    correct: 1
  },
  {
    type: "normal",
    id: 20,
    category: "minibus",
    question: {
      ar: "ماذا يجب أن يفعل سائق الباص عند اقترابه من سكة حديد غير محروسة؟",
      fr: "Que doit faire un conducteur de bus lorsqu'il s'approche d'un passage à niveau non gardé ?",
      en: "What must a bus driver do when approaching an unguarded railway crossing?"
    },
    options: {
      ar: [
        "عدم الاهتمام لأن القطارات نادرة في لبنان.",
        "التوقف التام والتأكد من خلو السكة من القطارات.",
        "إطلاق الزمور وزيادة السرعة للعبور بسرعة."
      ],
      fr: [
        "Ne pas s'en soucier car les trains sont rares au Liban.",
        "L'arrêt complet et s'assurer que la voie est libre de trains.",
        "Klaxonner et augmenter la vitesse pour traverser rapidement."
      ],
      en: [
        "Ignore it because trains are rare in Lebanon.",
        "Stop completely and ensure the track is clear of trains.",
        "Honk the horn and increase speed to cross quickly."
      ]
    },
    correct: 1
  },
  {
    type: "normal",
    id: 21,
    category: "minibus",
    question: {
      ar: "ما هو الإجراء الأول الذي يجب القيام به فور حدوث حريق في محرك الباص؟",
      fr: "Quelle est la première procédure à suivre immédiatement en cas d'incendie dans le moteur du bus ?",
      en: "What is the first procedure that must be done immediately upon a fire occurring in the bus engine?"
    },
    options: {
      ar: [
        "الاتصال بقوى الأمن والطوارئ.",
        "إخلاء الركاب، ثم محاولة إطفاء الحريق باستخدام المطفأة دون فتح الغطاء بالكامل.",
        "فتح غطاء المحرك وسكب الماء عليه فوراً وبسرعة."
      ],
      fr: [
        "Appeler les forces de sécurité et les urgences.",
        "Évacuer les passagers, puis tenter d'éteindre l'incendie à l'aide de l'extincteur sans ouvrir complètement le capot.",
        "Ouvrir le capot du moteur et verser de l'eau immédiatement et rapidement."
      ],
      en: [
        "Call security forces and emergency services.",
        "Evacuate passengers, then attempt to extinguish the fire using the extinguisher without fully opening the hood.",
        "Open the engine hood and pour water on it immediately and quickly."
      ]
    },
    correct: 1
  },
  {
    type: "normal",
    id: 22,
    category: "minibus",
    question: {
      ar: "ما هي الحمولة القصوى المسموح بها فوق سطح باص فئة 1D؟",
      fr: "Quelle est la charge maximale autorisée sur le toit d'un bus de catégorie D1 ?",
      en: "What is the maximum load permitted on the roof of a Category D1 bus?"
    },
    options: {
      ar: [
        "لا يسمح بوضع أي حمولة.",
        "الحمولة التي لا تزيد عن ارتفاع متر فوق الباص مهما كان وزنها.",
        "الحمولة التي لا تتجاوز الوزن الإجمالي المسموح به للباص مع الركاب ولا تؤثر على توازن المركبة."
      ],
      fr: [
        "Il est interdit de placer une quelconque charge.",
        "Une charge dont la hauteur ne dépasse pas un mètre, quel que soit son poids.",
        "Une charge ne dépassant pas le poids total autorisé pour le bus avec les passagers et n'affectant pas l'équilibre du véhicule."
      ],
      en: [
        "Placing any load is not permitted.",
        "Loads that do not exceed a height of one meter above the bus regardless of weight.",
        "Loads that do not exceed the total allowed weight for the bus with passengers and do not affect vehicle balance."
      ]
    },
    correct: 2
  },
  {
    type: "normal",
    id: 23,
    category: "minibus",
    question: {
      ar: "عند القيادة في الضباب الكثيف، أي أضواء يجب استخدامها؟",
      fr: "Lors de la conduite dans un brouillard épais, quels feux doivent être utilisés ?",
      en: "When driving in thick fog, which lights must be used?"
    },
    options: {
      ar: [
        "إطفاء كافة الأضواء.",
        "الأضواء العالية (القوية).",
        "أضواء الضباب والأضواء المنخفضة."
      ],
      fr: [
        "Éteindre tous les feux.",
        "Les feux de route (les phares puissants).",
        "Les feux antibrouillard et les feux de croisement (codes)."
      ],
      en: [
        "Turn off all lights.",
        "High beams (strong lights).",
        "Fog lights and low beams."
      ]
    },
    correct: 2
  },
  {
    type: "normal",
    id: 24,
    category: "minibus",
    question: {
      ar: "ماذا تفعل إذا شعرت بالنعاس أثناء قيادة الباص؟",
      fr: "Que faites-vous si vous ressentez de la somnolence en conduisant le bus ?",
      en: "What do you do if you feel drowsy while driving the bus?"
    },
    options: {
      ar: [
        "زيادة السرعة لزيادة الانتباه وتخفيض قوة النعاس.",
        "التوقف في مكان آمن وأخذ قسط من الراحة.",
        "فتح النافذة وتشغيل الراديو بصوت عالٍ مع شرب القهوة."
      ],
      fr: [
        "Augmenter la vitesse pour accroître l'attention et réduire la force de la somnolence.",
        "S'arrêter dans un endroit sûr et prendre un moment de repos.",
        "Ouvrir la fenêtre et allumer la radio à volume élevé tout en buvant du café."
      ],
      en: [
        "Increase speed to increase attention and reduce drowsiness.",
        "Stop in a safe place and take a rest.",
        "Open the window and play the radio loudly while drinking coffee."
      ]
    },
    correct: 1
  },
  {
    type: "normal",
    id: 25,
    category: "minibus",
    question: {
      ar: "ما هي عقوبة قيادة باص من فئة 1D برخصة سوق من غير فئة 1D؟",
      fr: "Quelle est la sanction pour la conduite d'un bus de catégorie D1 avec un permis de conduire autre que la catégorie D1 ?",
      en: "What is the penalty for driving a Category D1 bus with a driving license of a category other than D1?"
    },
    options: {
      ar: [
        "لا يتم تنظيم محضر فوراً ويكتفى بتنبيه شفهي وإعطاء مهلة شهر للتقدم لامتحان فئة باص، وفي حال عدم حيازة رخصة بعد شهر يتم تنظيم محضر.",
        "تنظيم محضر طابع من الفئة الثالثة، أي غرامة مالية واحتجاز للمركبة إضافة إلى إعطاء مهلة شهر للتقدم لامتحان فئة باص.",
        "تنظيم محضر من الفئة الخامسة، أي غرامة مالية وحجز المركبة وسحب نقاط من الرخصة."
      ],
      fr: [
        "Aucun procès-verbal n'est dressé immédiatement ; un avertissement verbal suffit avec un délai d'un mois pour passer l'examen de la catégorie D1, et en cas de non-obtention du permis après un mois, un procès-verbal est dressé.",
        "Dresser un procès-verbal de troisième catégorie, une amende financière et la saisie du véhicule, en plus d'un délai d'un mois pour passer l'examen de la catégorie D1.",
        "Dresser un procès-verbal de cinquième catégorie, une amende financière, la saisie du véhicule et le retrait de points du permis."
      ],
      en: [
        "No report is issued immediately; a verbal warning is sufficient, and a one-month grace period is given to apply for the bus category exam. If a license is not obtained after a month, a report is issued.",
        "Issuing a Category 3 violation report, meaning a financial fine and impounding the vehicle, in addition to giving a one-month deadline to apply for the bus category exam.",
        "Issuing a Category 5 violation report, meaning a financial fine, impounding the vehicle, and deducting points from the license."
      ]
    },
    correct: 1
  },
  {
    type: "normal",
    id: 26,
    category: "minibus",
    question: {
      ar: "ما عدد مثلث التنبيه التي يتوجب وضعها في حال تعطل الباص على طريق سريع؟",
      fr: "Quel est le nombre de triangles de signalisation à placer en cas de panne du bus sur une voie rapide ?",
      en: "How many warning triangles must be placed if the bus breaks down on a highway?"
    },
    options: {
      ar: [
        "واحد على مسافة لا تقل عن 50 إلى 100 متر خلف الباص.",
        "اثنان، الأول على مسافة 25 متر والثاني على مسافة 50 متر خلف الباص.",
        "ثلاثة، الأول على مسافة 25 متر والثاني على مسافة 50 متر خلف الباص والثالث فوق سطح الباص."
      ],
      fr: [
        "Un seul à une distance d'au moins 50 à 100 mètres derrière le bus.",
        "Deux : le premier à une distance de 25 mètres et le second à une distance de 50 mètres derrière le bus.",
        "Trois : le premier à une distance de 25 mètres, le second à une distance de 50 mètres derrière le bus et le troisième sur le toit du bus."
      ],
      en: [
        "One at a distance of no less than 50 to 100 meters behind the bus.",
        "Two, the first at a distance of 25 meters and the second at a distance of 50 meters behind the bus.",
        "Three, the first at 25 meters, the second at 50 meters behind the bus, and the third on top of the bus roof."
      ]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 27,
    category: "minibus",
    question: {
      ar: "لمن يجب إفساح الطريق على تقاطعات الطرق غير المنظمة بإشارات؟",
      fr: "À qui doit-on céder le passage aux intersections non régies par des feux de signalisation ?",
      en: "To whom must the right of way be yielded at road intersections not regulated by signals?"
    },
    options: {
      ar: [
        "لأي مركبة قادمة من اليمين.",
        "للباصات التي تسير بسرعة أكبر.",
        "للباصات التي تشغل أنوار التنبيه."
      ],
      fr: [
        "À tout véhicule venant de la droite.",
        "Aux bus qui roulent à une vitesse plus élevée.",
        "Aux bus qui utilisent les feux de détresse."
      ],
      en: [
        "To any vehicle coming from the right.",
        "To buses traveling at a higher speed.",
        "To buses operating their lights."
      ]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 28,
    category: "minibus",
    question: {
      ar: "هل يسمح لسائق الباص باستخدام الهاتف المحمول بواسطة سماعة الأذن (Free-Hands)؟",
      fr: "Est-il permis au conducteur de bus d'utiliser un téléphone portable avec une oreillette (mains libres) ?",
      en: "Is a bus driver permitted to use a mobile phone using an earpiece (Hands-free)?"
    },
    options: {
      ar: [
        "نعم، مسموح فقط لإرسال الرسائل الصوتية.",
        "يمنع استخدامه إلا في حالات الضرورة القصوى مع الحفاظ على التركيز التام.",
        "لا، يمنع منعاً باتاً تحت أي ظرف."
      ],
      fr: [
        "Oui, autorisé uniquement pour envoyer des messages vocaux.",
        "Son utilisation est interdite sauf en cas d'extrême nécessité tout en maintenant une concentration totale.",
        "Non, strictement interdit en toutes circonstances."
      ],
      en: [
        "Yes, allowed only for sending voice messages.",
        "Its use is prohibited except in cases of extreme necessity while maintaining full concentration.",
        "No, it is strictly prohibited under any circumstance."
      ]
    },
    correct: 1
  },
  {
    type: "normal",
    id: 29,
    category: "minibus",
    question: {
      ar: "ما هي أقصى فترة قيادة متواصلة مسموح بها لسائق الباص قبل أخذ استراحة؟",
      fr: "Quelle est la durée maximale de conduite continue autorisée pour un conducteur de bus avant de prendre une pause ?",
      en: "What is the maximum continuous driving period allowed for a bus driver before taking a break?"
    },
    options: {
      ar: ["ساعتان.", "3 ساعات.", "4 ساعات."],
      fr: ["2 heures.", "3 heures.", "4 heures."],
      en: ["Two hours.", "3 hours.", "4 hours."]
    },
    correct: 2
  },
  {
    type: "normal",
    id: 30,
    category: "minibus",
    question: {
      ar: "ما هو ترتيب الإجراءات الصحيحة عند الرغبة في الانعطاف يميناً بباص من فئة 1D؟",
      fr: "Quel est l'ordre correct des procédures pour tourner à droite avec un bus de catégorie D1 ?",
      en: "What is the correct order of procedures when desiring to turn right with a Category D1 bus?"
    },
    options: {
      ar: [
        "إعطاء إشارة اتجاه قبل مسافة كافية، مراقبة المرايا، ثم الانعطاف بهدوء.",
        "إعطاء إشارة اتجاه قبل مسافة كافية، مراقبة المرايا، ثم الانعطاف بعد استخدام المسرب الأيسر لتوسيع المسار والسماح بانعطاف هادئ للركاب.",
        "إعطاء إشارة اتجاه قبل مسافة كافية، ثم الانعطاف من ضمن المسرب الأيمن دون توسيع المسار."
      ],
      fr: [
        "Mettre le clignotant à droite, vérifier suffisamment les rétroviseurs, puis tourner calmement.",
        "Mettre le clignotant à droite, vérifier suffisamment les rétroviseurs, puis tourner après avoir utilisé la voie de gauche pour élargir la trajectoire et permettre un virage calme pour les passagers.",
        "Mettre le clignotant à droite, vérifier suffisamment les rétroviseurs, puis tourner depuis la voie de droite sans élargir la trajectoire."
      ],
      en: [
        "Signal right a sufficient distance ahead, check mirrors, then turn calmly.",
        "Signal right a sufficient distance ahead, check mirrors, then turn after using the left lane to widen the path and allow a calm turn for passengers.",
        "Signal right a sufficient distance ahead, then turn from within the right lane without widening the path."
      ]
    },
    correct: 1
  },
  {
    type: "normal",
    id: 31,
    category: "minibus",
    question: {
      ar: "ما هو الإجراء الصحيح عند الرغبة في الانعطاف يساراً بباص من فئة 1D؟",
      fr: "Quelle est la procédure correcte pour tourner à gauche avec un bus de catégorie D1 ?",
      en: "What is the correct procedure when desiring to turn left with a Category D1 bus?"
    },
    options: {
      ar: [
        "إعطاء إشارة اتجاه قبل مسافة كافية، مراقبة المرايا، ثم الانعطاف بهدوء.",
        "إعطاء إشارة اتجاه قبل مسافة كافية، مراقبة المرايا، ثم الانعطاف بعد استخدام المسرب الأيمن لتوسيع المسار والسماح بانعطاف هادئ للركاب.",
        "إعطاء إشارة اتجاه قبل مسافة كافية، ثم الانعطاف من ضمن المسرب الأيسر دون توسيع المسار."
      ],
      fr: [
        "Mettre le clignotant à gauche, vérifier suffisamment les rétroviseurs, puis tourner calmement.",
        "Mettre le clignotant à gauche, vérifier suffisamment les rétroviseurs, puis tourner après avoir utilisé la voie de droite pour élargir la trajectoire et permettre un virage calme pour les passagers.",
        "Mettre le clignotant à gauche, vérifier suffisamment les rétroviseurs, puis tourner depuis la voie de gauche sans élargir la trajectoire."
      ],
      en: [
        "Signal left a sufficient distance ahead, check mirrors, then turn calmly.",
        "Signal left a sufficient distance ahead, check mirrors, then turn after using the right lane to widen the path and allow a calm turn for passengers.",
        "Signal left a sufficient distance ahead, then turn from within the left lane without widening the path."
      ]
    },
    correct: 1
  },










   {
    type: "normal",
    id: 1,
    category: "small_truck",
    question: {
      ar: "إن شاحنة محملة لا يمكنها نقل أكثر من:",
      fr: "Un camion chargé ne peut pas transporter plus de :",
      en: "A loaded truck cannot transport more than:"
    },
    options: {
      ar: ["شخصين.", "شخص واحد.", "وفق العدد المحدّد في الرخصة."],
      fr: ["Deux personnes.", "Une personne.", "Selon le nombre spécifié dans le permis."],
      en: ["Two people.", "One person.", "According to the number specified in the license."]
    },
    correct: 2
  },
  {
    type: "normal",
    id: 2,
    category: "small_truck",
    question: {
      ar: "على كل سائق شاحنة أن ينتبه إلى عرض مركبته خاصةً:",
      fr: "Tout conducteur de camion doit faire attention à la largeur de son véhicule surtout :",
      en: "Every truck driver must pay attention to the width of his vehicle specifically:"
    },
    options: {
      ar: ["عند تجاوزه لمركبة أخرى.", "عند قيادته في الطرق المفتوحة.", "عند أخذه قسطاً من الراحة."],
      fr: ["Lorsqu'il dépasse un autre véhicule.", "Lorsqu'il roule sur des routes ouvertes.", "Lorsqu'il prend une pause."],
      en: ["When overtaking another vehicle.", "When driving on open roads.", "When taking a rest break."]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 3,
    category: "small_truck",
    question: {
      ar: "على سائق الشاحنة الصغيرة أن:",
      fr: "Le conducteur d'un petit camion doit :",
      en: "A small truck driver must:"
    },
    options: {
      ar: ["يرجع إلى الخلف في الأماكن المكتظة.", "يرجع إلى الخلف داخل النفق.", "يتفادى الرجوع إلى الخلف في الأماكن المكتظة."],
      fr: ["Faire marche arrière dans les endroits encombrés.", "Faire marche arrière dans un tunnel.", "Éviter la marche arrière dans les endroits encombrés."],
      en: ["Reverse in crowded places.", "Reverse inside a tunnel.", "Avoid reversing in crowded places."]
    },
    correct: 2
  },
  {
    type: "normal",
    id: 4,
    category: "small_truck",
    question: {
      ar: "على سائق الشاحنة الصغيرة أن:",
      fr: "Le conducteur du petit camion doit :",
      en: "A small truck driver must:"
    },
    options: {
      ar: ["يلم ببعض خصائص مركبته.", "يلم بكل خصائص مركبته.", "يلم بخصائص مركبة السائق الآخر."],
      fr: ["Connaître certaines caractéristiques de son véhicule.", "Connaître toutes les caractéristiques de son véhicule.", "Connaître les caractéristiques du véhicule d'un autre conducteur."],
      en: ["Be familiar with some of his vehicle's characteristics.", "Be familiar with all of his vehicle's characteristics.", "Be familiar with the characteristics of the previous driver's vehicle."]
    },
    correct: 1
  },
  {
    type: "normal",
    id: 5,
    category: "small_truck",
    question: {
      ar: "يكمن الخطر أثناء القيادة عند الاقتراب من قمة مرتفع في:",
      fr: "Le danger en conduisant à l'approche du sommet d'une côte réside dans :",
      en: "The danger while driving when approaching a crest (top of a hill) lies in:"
    },
    options: {
      ar: ["عدم رؤية ما يجري خلف المرتفع.", "إزدياد اندفاع المركبة تلقائياً.", "انخفاض درجة حرارة المحرك."],
      fr: ["Le fait de ne pas voir ce qui se passe derrière la crête.", "L'augmentation automatique de l'élan du véhicule.", "La diminution de la température du moteur."],
      en: ["Not seeing what is happening behind the crest.", "The vehicle's momentum increasing automatically.", "The engine temperature decreasing."]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 6,
    category: "small_truck",
    question: {
      ar: "عند اقترابك من قمة مرتفع على سرعة عالية، عليك أن:",
      fr: "Lorsque vous approchez du sommet d'une côte à grande vitesse, vous devez :",
      en: "When you approach a crest at high speed, you must:"
    },
    options: {
      ar: ["تزيد سرعتك.", "تحافظ على سرعتك.", "تخفف سرعتك."],
      fr: ["Augmenter votre vitesse.", "Maintenir votre vitesse.", "Réduire votre vitesse."],
      en: ["Increase your speed.", "Maintain your speed.", "Reduce your speed."]
    },
    correct: 2
  },
  {
    type: "normal",
    id: 7,
    category: "small_truck",
    question: {
      ar: "عند اقترابك من قمة مرتفع، عليك أن تتوقع خلف القمة:",
      fr: "Lorsque vous approchez du sommet d'une côte, vous devez vous attendre derrière la crête à :",
      en: "When you approach a crest, you must expect behind the crest:"
    },
    options: {
      ar: ["وجود عقبات.", "عدم وجود عقبات.", "انفراجاً في حركة المرور."],
      fr: ["La présence d'obstacles.", "L'absence d'obstacles.", "Une amélioration de la circulation."],
      en: ["The presence of obstacles.", "The absence of obstacles.", "A relief in traffic flow."]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 8,
    category: "small_truck",
    question: {
      ar: "إذا استعملت الزمور بشكل متواصل عند اقترابك من قمة مرتفع، فإن ذلك:",
      fr: "Si vous utilisez le klaxon de façon continue en approchant du sommet d'une côte, cela :",
      en: "If you use the horn continuously when approaching a crest, then that:"
    },
    options: {
      ar: ["سيمكنك من سماع زمور الآخرين.", "سيمنعك من سماع زمور القادمين من خلف القمة.", "لن يساعدك بشيء."],
      fr: ["Vous permettra d'entendre les klaxons des autres.", "Vous empêchera d'entendre les klaxons de ceux qui viennent de derrière la crête.", "Ne vous aidera en rien."],
      en: ["Will enable you to hear the horns of others.", "Will prevent you from hearing the horns of those coming from behind the crest.", "Will not help you with anything."]
    },
    correct: 1
  },
  {
    type: "normal",
    id: 9,
    category: "small_truck",
    question: {
      ar: "عندما تقترب بشاحنتك من منحدر على سرعة عالية، يجب عليك أن تخفف سرعتك و:",
      fr: "Lorsque vous approchez avec votre camion d'une descente à grande vitesse, vous devez réduire votre vitesse et :",
      en: "When you approach a descent (downhill slope) with your truck at high speed, you must reduce your speed and:"
    },
    options: {
      ar: ["تختار ترس سرعة أعلى.", "تبقى على نفس ترس السرعة.", "تختار ترس سرعة أقل."],
      fr: ["Choisir un rapport de vitesse plus élevé.", "Rester sur le même rapport.", "Choisir un rapport de vitesse inférieur."],
      en: ["Choose a higher gear speed.", "Stay on the same gear speed.", "Choose a lower gear speed."]
    },
    correct: 2
  },
  {
    type: "normal",
    id: 10,
    category: "small_truck",
    question: {
      ar: "عندما تقود شاحنتك على منحدر، للسيطرة على مركبتك يجب عليك أن تعتمد على:",
      fr: "Lorsque vous conduisez votre camion dans une descente, pour contrôler votre véhicule vous devez compter sur :",
      en: "When you drive your truck on a descent, to control your vehicle you must rely on:"
    },
    options: {
      ar: ["كابح الخدمة وكابح الوقوف.", "الترس العالي بالدرجة الأولى.", "الترس المنخفض بالدرجة الأولى."],
      fr: ["Le frein de service et le frein de stationnement.", "Le rapport élevé au premier degré.", "Le rapport bas au premier degré."],
      en: ["The service brake and the parking brake.", "The high gear in the first degree.", "The low gear in the first degree."]
    },
    correct: 2
  },
  {
    type: "normal",
    id: 11,
    category: "small_truck",
    question: {
      ar: "إن استعمالك للمكابح الرئيسية في الشاحنة بشكل متواصل على منحدر طويل، يبطل مفعول:",
      fr: "L'utilisation continue des freins principaux du camion sur une longue descente annule l'effet :",
      en: "Your continuous use of the main brakes on a long descent invalidates their effect:"
    },
    options: {
      ar: ["الكابح بسبب ارتفاع حرارة الخمادات.", "البطارية بسبب الاستهلاك الزائد للكهرباء.", "الرادياتور بسبب الحرارة الزائدة في المحرك."],
      fr: ["Des freins à cause de l'élévation de leur température.", "De la batterie à cause de la consommation excessive.", "Du radiateur à cause de la chaleur excessive du moteur."],
      en: ["Because of the rise in their temperature.", "Because of the battery due to excessive consumption.", "Because of the radiator due to excessive heat."]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 12,
    category: "small_truck",
    question: {
      ar: "عندما تقود شاحنتك على منحدر طويل، يجب عليك أن تستعمل ترس سرعة:",
      fr: "Lorsque vous conduisez votre camion sur une longue descente, vous devez utiliser un rapport de vitesse :",
      en: "When you drive your truck on a long descent, you must use a gear speed:"
    },
    options: {
      ar: ["عالي والكوابح الإضافية.", "منخفض والكوابح الإضافية.", "منخفض وفرامل اليد."],
      fr: ["Élevé avec les freins auxiliaires.", "Bas avec les freins auxiliaires.", "Bas avec le frein à main."],
      en: ["High and the additional brakes.", "Low and the additional brakes.", "Low and the handbrake."]
    },
    correct: 1
  },
  {
    type: "normal",
    id: 13,
    category: "small_truck",
    question: {
      ar: "إذا دخلت منحدراً طويلاً بالشاحنة وتأخرت بالانتقال إلى ترس سرعة منخفض وأصبحت سرعتك عالية، فسوف:",
      fr: "Si vous entrez dans une longue descente avec le camion et que vous retardez le passage à un rapport inférieur jusqu'à ce que votre vitesse devienne élevée, alors :",
      en: "If you entered a descent for a long time with the truck and delayed shifting to a low gear speed and your speed became high, then:"
    },
    options: {
      ar: ["يصبح من السهل عليك الانتقال إلى ترس سرعة منخفض.", "تنخفض سرعتك تلقائياً.", "يصبح من المستحيل الانتقال إلى ترس سرعة منخفض للسيطرة على المركبة."],
      fr: ["Il devient facile de passer à un rapport inférieur.", "Votre vitesse diminue automatiquement.", "Il devient impossible de passer à un rapport inférieur pour contrôler le véhicule."],
      en: ["It becomes easy for you to shift to a low gear speed.", "Your speed decreases automatically.", "It becomes impossible to shift to a low gear speed to control the vehicle."]
    },
    correct: 2
  },
  {
    type: "normal",
    id: 14,
    category: "small_truck",
    question: {
      ar: "عند قيادتك الشاحنة صعوداً، يجب عليك أن تختار ترس سرعة:",
      fr: "Lorsque vous conduisez le camion en montée, vous devez choisir un rapport de vitesse :",
      en: "When driving the truck uphill, you must choose a gear speed:"
    },
    options: {
      ar: ["منخفض يتناسب مع شدة المرتفع ووزن حمولة مركبتك.", "عالي يتناسب مع شدة المرتفع ولكن لا يتناسب مع وزن الحمولة.", "منخفض لا يتناسب مع شدة المرتفع ووزن الحمولة."],
      fr: ["Bas, adapté à la pente et au poids de la charge.", "Élevé, adapté à la pente mais non au poids de la charge.", "Bas, non adapté à la pente ni au poids de la charge."],
      en: ["Low that corresponds with the steepness of the incline and the weight of your vehicle's load.", "High that corresponds with the steepness of the incline but does not correspond with the load weight.", "Low that does not correspond with the steepness of the incline and the load weight."]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 15,
    category: "small_truck",
    question: {
      ar: "عند قيادتك للشاحنة صعوداً متواصلاً، يجب عليك:",
      fr: "Lorsque vous conduisez le camion en montée continue, vous devez :",
      en: "When driving the truck uphill continuously, you must:"
    },
    options: {
      ar: ["تجنب إجهاد المحرك.", "حافظ على سرعة الشاحنة قدر المستطاع.", "عدم السماح للمركبات الصغيرة بتجاوزك."],
      fr: ["Éviter de fatiguer le moteur.", "Maintenir autant que possible la vitesse du camion.", "Ne pas permettre aux petits véhicules de vous dépasser."],
      en: ["Avoid straining the engine.", "Maintain the truck's speed as much as possible.", "Not allow small vehicles to overtake you."]
    },
    correct: 1
  },
  {
    type: "normal",
    id: 16,
    category: "small_truck",
    question: {
      ar: "عند قيادتك للشاحنة صعوداً متواصلاً، يجب عليك:",
      fr: "Lorsque vous conduisez le camion en montée continue, vous devez :",
      en: "When driving the truck uphill continuously, you must:"
    },
    options: {
      ar: ["النظر إلى مؤشر الحرارة معظم الوقت.", "التزام أقصى اليسار قدر المستطاع.", "التزام أقصى اليمين قدر المستطاع."],
      fr: ["Regarder l'indicateur de température la plupart du temps.", "Rester à l'extrême gauche autant que possible.", "Rester à l'extrême droite autant que possible."],
      en: ["Look at the temperature gauge most of the time.", "Keep to the far left as much as possible.", "Keep to the far right as much as possible."]
    },
    correct: 2
  },
  {
    type: "normal",
    id: 17,
    category: "small_truck",
    question: {
      ar: "عند قيادتك الشاحنة صعوداً، يجب عليك:",
      fr: "Lorsque vous conduisez le camion en montée, vous devez :",
      en: "When driving the truck uphill, you must:"
    },
    options: {
      ar: ["تسهيل مهمة الآخرين حين يتجاوزونك.", "عدم تسهيل مهمة الآخرين حين يتجاوزونك.", "التزمير للآخرين حين يتجاوزونك."],
      fr: ["Faciliter la tâche des autres lorsqu'ils vous dépassent.", "Ne pas faciliter la tâche des autres lorsqu'ils vous dépassent.", "Klaxonner les autres lorsqu'ils vous dépassent."],
      en: ["Facilitate the task of others when they overtake you.", "Not facilitate the task of others when they overtake you.", "Honk at others when they overtake you."]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 18,
    category: "small_truck",
    question: {
      ar: "إذا كنت تريد أن تتجاوز بشاحنتك مركبة أخرى صعوداً، وكان ذلك سيستغرقك وقتاً طويلاً، فعليك أن:",
      fr: "Si vous voulez dépasser un autre véhicule avec votre camion en montée et que cela doit prendre longtemps, vous devez :",
      en: "If you want to overtake another vehicle with your truck while going uphill, and that will take you a long time, you must:"
    },
    options: {
      ar: ["تصر على القيام بهذا التجاوز.", "تزيد من سرعتك.", "تصرف النظر عن هذا التجاوز."],
      fr: ["Insister pour effectuer ce dépassement.", "Augmenter votre vitesse.", "Abandonner cette manœuvre de dépassement."],
      en: ["Insist on performing this overtaking maneuver.", "Increase your speed.", "Abandon this overtaking maneuver."]
    },
    correct: 2
  },
  {
    type: "normal",
    id: 19,
    category: "small_truck",
    question: {
      ar: "إن قيادة الشاحنة على طريق وعرة، تحتّم عليك أن:",
      fr: "Conduire le camion sur une route difficile vous oblige à :",
      en: "Driving the truck on a rough and rugged road necessitates that you:"
    },
    options: {
      ar: ["تزيد من سرعتك قليلاً.", "تكون حذراً وأن تخطط للطريق مسبقاً.", "لا تعطي الأمر أية أهمية."],
      fr: ["Augmenter légèrement votre vitesse.", "Être prudent et planifier la route à l'avance.", "Ne donner aucune importance à cela."],
      en: ["Increase your speed slightly.", "Be cautious and plan the route in advance.", "Give the matter no importance."]
    },
    correct: 1
  },
  {
    type: "normal",
    id: 20,
    category: "small_truck",
    question: {
      ar: "أثناء قيادة الشاحنة على مختلف الطرقات، يجب عليك أن:",
      fr: "En conduisant le camion sur différentes routes, vous devez :",
      en: "While driving the truck on various roads, you must:"
    },
    options: {
      ar: ["تتجنب الطرق الوعرة قدر المستطاع.", "تختار الطرق الوعرة لأنها أقل زحمة.", "تختار الطرق الوعرة لأنها ذات صفة طبيعية."],
      fr: ["Éviter autant que possible les routes difficiles.", "Choisir les routes difficiles parce qu'elles sont moins encombrées.", "Choisir les routes difficiles parce qu'elles sont naturelles."],
      en: ["Avoid rough roads as much as possible.", "Choose rough roads because they are less crowded.", "Choose rough roads because they are of a natural character."]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 21,
    category: "small_truck",
    question: {
      ar: "إذا توجب على سائق المركبة أن يرجع بمركبته إلى الخلف، يجب عليه أن:",
      fr: "Si le conducteur d'un véhicule est obligé de faire marche arrière, il doit :",
      en: "If the vehicle driver is obliged to reverse with his vehicle, he must:"
    },
    options: {
      ar: ["يرجع على سرعة رجوع معتدلة.", "يجعل مسافة الرجوع أطول مسافة ممكنة.", "يجعل مسافة الرجوع أقصر مسافة ممكنة."],
      fr: ["Reculer à une vitesse modérée.", "Rendre la distance de recul aussi longue que possible.", "Rendre la distance de recul aussi courte que possible."],
      en: ["Reverse at a medium speed.", "Make the reversing distance as long as possible.", "Make the reversing distance as short as possible."]
    },
    correct: 2
  },
  {
    type: "normal",
    id: 22,
    category: "small_truck",
    question: {
      ar: "كسائق شاحنة، يلزمك القانون بإعطاء الأفضلية:",
      fr: "En tant que conducteur de camion, la loi vous oblige à céder la priorité :",
      en: "As a driver, the law requires you to give priority to:"
    },
    options: {
      ar: ["للمركبات المسرعة.", "للحافلات المدرسية المستخدِمة لأنوار التحذير.", "للمركبات المبطئة."],
      fr: ["Aux véhicules en excès de vitesse.", "Aux autobus scolaires utilisant les feux d'avertissement.", "Aux véhicules lents."],
      en: ["Speeding vehicles.", "School buses using warning lights.", "Slow-moving vehicles."]
    },
    correct: 1
  },
  {
    type: "normal",
    id: 23,
    category: "small_truck",
    question: {
      ar: "إن المرايا المحدبة في المركبات تظهر الأجسام:",
      fr: "Les rétroviseurs convexes dans les véhicules montrent les objets :",
      en: "Convex mirrors in vehicles show objects:"
    },
    options: {
      ar: ["على مسافات أبعد مما هي عليه.", "على مسافات أقرب مما هي عليه.", "بشكل غير واضح."],
      fr: ["À des distances plus éloignées qu'elles ne le sont réellement.", "À des distances plus proches qu'elles ne le sont réellement.", "De manière peu claire."],
      en: ["At distances farther than they actually are.", "At distances closer than they actually are.", "In an unclear manner."]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 24,
    category: "small_truck",
    question: {
      ar: "عندما ينظر سائق المركبة في المرآة المحدبة، فإنه يرى فيها الأجسام:",
      fr: "Lorsque le conducteur regarde dans un miroir convexe, il voit les objets :",
      en: "When a vehicle driver looks into a convex mirror, he sees objects in it:"
    },
    options: {
      ar: ["على حجمها العادي.", "بشكل مصغّر.", "بشكل باهت."],
      fr: ["À leur taille normale.", "Sous une forme réduite.", "Sous une forme pâle."],
      en: ["At their normal size.", "In a miniaturized form (smaller size).", "In a faded form."]
    },
    correct: 1
  },
  {
    type: "normal",
    id: 25,
    category: "small_truck",
    question: {
      ar: "على سائق المركبة إذا كان يتعاطى الأدوية الطبية، أن يعرف مدى تأثير هذه الأدوية على القيادة وذلك:",
      fr: "Si le conducteur prend des médicaments, il doit connaître leur effet sur la conduite, et cela :",
      en: "If a vehicle driver is taking medical drugs, he must know the extent of the effect of these drugs on driving, and that is:"
    },
    options: {
      ar: ["قبل القيادة.", "أثناء القيادة.", "بعد حصول الحادث."],
      fr: ["Avant de conduire.", "Pendant la conduite.", "Après l'accident."],
      en: ["Before driving.", "While driving.", "After an accident occurs."]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 26,
    category: "small_truck",
    question: {
      ar: "إن بعض الأدوية الطبية لها تأثير منوّم، لذلك يجب على السائق أن:",
      fr: "Certains médicaments ont un effet soporifique, donc le conducteur doit :",
      en: "Some medical drugs have a hypnotic (drowsy) effect, therefore the driver must:"
    },
    options: {
      ar: ["يتناولها عند مشارفة القيادة على الانتهاء.", "يتناولها بعد الانتهاء من القيادة.", "يتناولها مع عقاقير اليقظة أثناء القيادة."],
      fr: ["Les prendre lorsque la conduite est sur le point de se terminer.", "Les prendre après avoir fini de conduire.", "Les prendre avec des stimulants pendant la conduite."],
      en: ["Take them when driving is about to end.", "Take them after finishing driving.", "Take them with alertness drugs while driving."]
    },
    correct: 1
  },
  {
    type: "normal",
    id: 27,
    category: "small_truck",
    question: {
      ar: "إن أفضل وسيلة ليعرف السائق مدى تأثير الدواء الطبي على قيادته هي أن:",
      fr: "Le meilleur moyen pour le conducteur de connaître l'effet d'un médicament sur sa conduite est de :",
      en: "The best way for a driver to know the extent of a medical drug's effect on his driving is to:"
    },
    options: {
      ar: ["يسأل أحد السائقين.", "يسأل الطبيب المعالج.", "يتناول الدواء ويجربه في القيادة."],
      fr: ["Demander à un autre conducteur.", "Demander au médecin traitant.", "Prendre le médicament et l'essayer en conduisant."],
      en: ["Ask one of the drivers.", "Ask the treating physician.", "Take the medicine and experiment with it while driving."]
    },
    correct: 1
  },
  {
    type: "normal",
    id: 28,
    category: "small_truck",
    question: {
      ar: "من الوسائل المساعدة التي تمكّن السائق من معرفة مدى تأثير الدواء الطبي على قيادته هي:",
      fr: "Parmi les moyens utiles qui permettent au conducteur de connaître l'effet d'un médicament sur sa conduite, il y a :",
      en: "Among the helpful means that enable the driver to know the extent of a medical drug's effect on his driving are:"
    },
    options: {
      ar: ["تناول الدواء دون الرجوع إلى ورقة التعليمات المرفقة.", "تناول الدواء قبل القيادة وقراءة ورقة التعليمات بعد القيادة.", "قراءة ورقة التعليمات المرفقة مع الدواء قبل تناول الدواء وقبل القيادة."],
      fr: ["Prendre le médicament sans consulter la notice jointe.", "Prendre le médicament avant de conduire puis lire la notice après la conduite.", "Lire la notice jointe au médicament avant de le prendre et avant de conduire."],
      en: ["Taking the medicine without referring to the attached instruction leaflet.", "Taking the medicine before driving and reading the instructions after driving.", "Reading the attached instruction leaflet with the medicine before taking the medicine and before driving."]
    },
    correct: 2
  },
  {
    type: "normal",
    id: 29,
    category: "small_truck",
    question: {
      ar: "يستطيع سائق المركبة أن يعرف مدى التأثير الذي يسببه الدواء على قيادته عن طريق:",
      fr: "Le conducteur peut connaître l'effet causé par le médicament sur sa conduite en :",
      en: "A vehicle driver can know the extent of the effect caused by the medicine on his driving by:"
    },
    options: {
      ar: ["سؤاله للصيدلي قبل البدء بالقيادة وقبل تناول الدواء.", "سؤاله للصيدلي على الهاتف أثناء القيادة وبعد تناول الدواء.", "تجربة ذلك بنفسه فيتناول الدواء أثناء القيادة."],
      fr: ["Demandant au pharmacien avant de commencer à conduire et avant de prendre le médicament.", "Demandant au pharmacien au téléphone pendant la conduite et après avoir pris le médicament.", "L'essayant lui-même en prenant le médicament pendant la conduite."],
      en: ["Asking the pharmacist before starting to drive and before taking the medicine.", "Asking the pharmacist on the phone while driving and after taking the medicine.", "Trying it himself, so he takes the medicine while driving."]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 30,
    category: "small_truck",
    question: {
      ar: "على كل سائق شاحنة أن ينتبه إلى عرض مركبته خاصةً:",
      fr: "Tout conducteur de camion doit faire attention à la largeur de son véhicule surtout :",
      en: "Every truck driver must pay attention to the width of his vehicle specifically:"
    },
    options: {
      ar: ["عند دخوله في مكان ضيق.", "عند قيادته في الأماكن المفتوحة.", "قبل تفريغ حمولته."],
      fr: ["Lorsqu'il entre dans un endroit étroit.", "Lorsqu'il conduit dans des endroits ouverts.", "Avant de décharger sa cargaison."],
      en: ["When entering a narrow place.", "When driving in open places.", "Before unloading his cargo."]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 31,
    category: "small_truck",
    question: {
      ar: "على سائق الشاحنة الصغيرة أن:",
      fr: "Le conducteur du petit camion doit :",
      en: "A small truck driver must:"
    },
    options: {
      ar: ["يرجع إلى الخلف في الأماكن المكتظة.", "يرجع إلى الخلف بعد التقاطع مباشرة.", "يتفادى الرجوع إلى الخلف في الأماكن المكتظة."],
      fr: ["Faire marche arrière dans les endroits encombrés.", "Faire marche arrière juste après le carrefour.", "Éviter la marche arrière dans les endroits encombrés."],
      en: ["Reverse in crowded places.", "Reverse immediately after an intersection.", "Avoid reversing in crowded places."]
    },
    correct: 2
  },
  {
    type: "normal",
    id: 32,
    category: "small_truck",
    question: {
      ar: "على سائق محملة بخزانات أو براميل، قبل بدء الرحلة، أن يتأكد من أن:",
      fr: "Le conducteur d'un camion chargé de citernes ou de barils doit, avant le départ, s'assurer que :",
      en: "A driver of a truck loaded with tanks or barrels, before starting the trip, must ensure that:"
    },
    options: {
      ar: ["كل أغطية الخزانات أو البراميل محكمة الإغلاق.", "بعض أغطية الخزانات محكمة الإغلاق.", "الخزانات أو البراميل ممتلئة أو فارغة كلياً ومحكمة الإغلاق."],
      fr: ["Tous les couvercles des citernes ou des barils sont bien fermés.", "Quelques couvercles des citernes sont bien fermés.", "Les citernes ou les barils sont entièrement pleins ou entièrement vides et bien fermés."],
      en: ["All tank covers or barrels are tightly closed.", "Some tank covers are tightly closed.", "The tanks or barrels are full or completely empty and tightly closed."]
    },
    correct: 0
  },













// 👉 sign

{
  type: "sign",
  id: 1,
  category: "signs",
  image: "images/signs/1.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
    ar: ["انتبه مطبات", "انتبه انخفاض", "انتبه طريق زلق"],
    fr: ["Attention dos-d'âne", "Attention descente", "Attention route glissante"],
    en: ["Beware bumps", "Beware slope", "Slippery road ahead"]
  },
  correct: 2
},

{
  type: "sign",
  id: 2,
  category: "signs",
  image: "images/signs/3.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
    ar: ["انتبه منعطف يسار", "اتجاه مستديرة", "انتبه منعطف يمين"],
    fr: ["Virage à gauche", "Sens giratoire", "Virage à droite"],
    en: ["Left curve ahead", "Roundabout direction", "Right curve ahead"]
  },
  correct: 2
},

{
  type: "sign",
  id: 3,
  category: "signs",
  image: "images/signs/4.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
    ar: ["اتجاه إجباري يسار", "انتبه منعطف يسار", "انتبه منعطف يمين"],
    fr: ["Direction obligatoire gauche", "Virage à gauche", "Virage à droite"],
    en: ["Mandatory left", "Left curve", "Right curve"]
  },
  correct: 1
},

{
  type: "sign",
  id: 4,
  category: "signs",
  image: "images/signs/5.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
    ar: ["منطقة سير على خطين", "منعطفان أولهما يسار", "منعطفان أولهما يمين"],
    fr: ["Route à deux voies", "Double virage, premier à gauche", "Double virage, premier à droite"],
    en: ["Two-way traffic", "Double curve first left", "Double curve first right"]
  },
  correct: 2
},

{
  type: "sign",
  id: 5,
  category: "signs",
  image: "images/signs/6.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
    ar: ["منطقة سير على خطين", "منعطفان أولهما يسار", "منعطفان أولهما يمين"],
    fr: ["Route à deux voies", "Double virage, premier à gauche", "Double virage, premier à droite"],
    en: ["Two-way traffic", "Double curve first left", "Double curve first right"]
  },
  correct: 1
},

{
  type: "sign",
  id: 6,
  category: "signs",
  image: "images/signs/10.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
    ar: ["انتبه طريق ضيق", "انتبه منحدر خطر", "انتبه طريق زلق"],
    fr: ["Route étroite", "Descente dangereuse", "Route glissante"],
    en: ["Narrow road", "Dangerous slope", "Slippery road"]
  },
  correct: 2
},

{
  type: "sign",
  id: 7,
  category: "signs",
  image: "images/signs/11.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
    ar: ["ممر غير مؤمن", "ممنوع المرور", "انتبه أولاد أو مدرسة"],
    fr: ["Passage non protégé", "Interdit de passer", "Attention enfants / école"],
    en: ["Unprotected crossing", "No entry", "Children / school zone"]
  },
  correct: 2
},

{
  type: "sign",
  id: 8,
  category: "signs",
  image: "images/signs/13.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
    ar: ["حيوانات مترددة", "ممنوع للحيوانات", "انتبه حيوانات"],
    fr: ["Animaux hésitants", "Interdit aux animaux", "Attention animaux"],
    en: ["Animals wandering", "No animals allowed", "Beware animals"]
  },
  correct: 2
},

{
  type: "sign",
  id: 9,
  category: "signs",
  image: "images/signs/14.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
    ar: ["منطقة سير على خطين", "انتبه تقاطع طرق بدون أفضلية", "تقاطع مع طريق رئيسي"],
    fr: ["Route à deux voies", "Intersection sans priorité", "Intersection avec route principale"],
    en: ["Two-way traffic", "Intersection without priority", "Intersection with main road"]
  },
  correct: 1
},

{
  type: "sign",
  id: 10,
  category: "signs",
  image: "images/signs/15.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
    ar: ["انتبه أخطار متنوعة", "ممنوع الالتفاف", "انتبه مستديرة"],
    fr: ["Danger divers", "Demi-tour interdit", "Rond-point"],
    en: ["Various dangers", "No U-turn", "Roundabout"]
  },
  correct: 0
},


{
  type: "sign",
  id: 11,
  category: "signs",
  image: "images/signs/17.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
    ar: ["تقاطع طرق بدون أفضلية", "انتبه أفضلية المرور من الجهة المقابلة", "أفضلية المرور لك"],
    fr: ["Intersection sans priorité", "Priorité à sens inverse", "Vous avez la priorité"],
    en: ["Intersection without priority", "Priority to oncoming traffic", "You have priority"]
  },
  correct: 1
},

{
  type: "sign",
  id: 12,
  category: "signs",
  image: "images/signs/18.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
    ar: ["طريق سريع", "تقاطع طرق بدون أفضلية", "أفضلية المرور من الجهة المقابلة"],
    fr: ["Autoroute", "Intersection sans priorité", "Priorité sens inverse"],
    en: ["Highway", "Intersection without priority", "Priority to oncoming traffic"]
  },
  correct: 2
},

{
  type: "sign",
  id: 13,
  category: "signs",
  image: "images/signs/19.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
    ar: ["تقاطع من اليمين", "تقاطع طرق بدون أفضلية", "أفضلية المرور من الجهة المقابلة"],
    fr: ["Intersection à droite", "Intersection sans priorité", "Priorité sens inverse"],
    en: ["Right intersection", "No priority intersection", "Priority to oncoming traffic"]
  },
  correct: 1
},

{
  type: "sign",
  id: 14,
  category: "signs",
  image: "images/signs/24.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
    ar: ["توقف لحظة", "تحديد السرعة", "نهاية طريق أفضلية"],
    fr: ["Arrêt momentané", "Limitation de vitesse", "Fin de route prioritaire"],
    en: ["Stop briefly", "Speed limit", "End of priority road"]
  },
  correct: 2
},

{
  type: "sign",
  id: 15,
  category: "signs",
  image: "images/signs/25.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
    ar: ["ممر غير مخصص للمشاة", "ممنوع مرور المشاة", "ممر للمشاة"],
    fr: ["Passage non piéton", "Interdit aux piétons", "Passage piéton"],
    en: ["Not a pedestrian path", "Pedestrians prohibited", "Pedestrian crossing"]
  },
  correct: 2
},

{
  type: "sign",
  id: 16,
  category: "signs",
  image: "images/signs/26.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
    ar: ["ممر لعربات اليد", "ممنوع مرور الدراجات", "ممر للدراجات"],
    fr: ["Voie pour charrettes", "Interdit aux vélos", "Piste cyclable"],
    en: ["Hand carts path", "No bicycles", "Bicycle lane"]
  },
  correct: 2
},

{
  type: "sign",
  id: 17,
  category: "signs",
  image: "images/signs/29.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
    ar: ["طريق واسع", "طريق ضيق من اليسار", "طريق ضيق"],
    fr: ["Route large", "Chaussée rétrécie à gauche", "Chaussée rétrécie"],
    en: ["Wide road", "Road narrows left", "Narrow road"]
  },
  correct: 2
},

{
  type: "sign",
  id: 18,
  category: "signs",
  image: "images/signs/30.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
    ar: ["أفضلية مرور لليمين", "طريق ضيق من اليمين", "طريق ضيق من اليسار"],
    fr: ["Priorité à droite", "Chaussée rétrécie à droite", "Chaussée rétrécie à gauche"],
    en: ["Priority to right", "Road narrows right", "Road narrows left"]
  },
  correct: 1
},

{
  type: "sign",
  id: 19,
  category: "signs",
  image: "images/signs/31.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
    ar: ["نهاية الأفضلية", "طريق ضيق من اليمين", "أفضلية المرور من الجهة المقابلة"],
    fr: ["Fin de priorité", "Chaussée rétrécie à droite", "Priorité sens inverse"],
    en: ["End of priority", "Road narrows right", "Priority to oncoming traffic"]
  },
  correct: 2
},

{
  type: "sign",
  id: 20,
  category: "signs",
  image: "images/signs/32.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
    ar: ["منطقة جبلية", "انتبه سقوط صخور", "طريق ضيق"],
    fr: ["Zone montagneuse", "Chute de pierres", "Chaussée rétrécie"],
    en: ["Mountain area", "Falling rocks", "Narrow road"]
  },
  correct: 1
},


{
  type: "sign",
  id: 21,
  category: "signs",
  image: "images/signs/33.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
    ar: ["ممنوع الدخول لجميع السيارات", "انتبه إشارات ضوئية", "انتبه مستديرة"],
    fr: ["Interdit à tous véhicules", "Feux de signalisation", "Rond-point"],
    en: ["No entry for all vehicles", "Traffic lights ahead", "Roundabout"]
  },
  correct: 1
},

{
  type: "sign",
  id: 22,
  category: "signs",
  image: "images/signs/37.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
    ar: ["ممنوع المرور", "انتبه أفضلية أمامك", "انتبه أخطار متنوعة"],
    fr: ["Accès interdit", "Priorité devant", "Danger divers"],
    en: ["No entry", "Priority ahead", "Various dangers"]
  },
  correct: 2
},

{
  type: "sign",
  id: 23,
  category: "signs",
  image: "images/signs/38.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
    ar: ["ممنوع المرور", "انتبه أفضلية أمامك", "انتبه أخطار متنوعة"],
    fr: ["Accès interdit", "Priorité devant", "Danger divers"],
    en: ["No entry", "Priority ahead", "Various dangers"]
  },
  correct: 1
},

{
  type: "sign",
  id: 24,
  category: "signs",
  image: "images/signs/39.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
    ar: ["ممنوع المرور", "نهاية الأفضلية", "أفضلية المرور من الجهة المقابلة"],
    fr: ["Accès interdit", "Fin de priorité", "Priorité sens inverse"],
    en: ["No entry", "End of priority", "Priority to oncoming traffic"]
  },
  correct: 1
},

{
  type: "sign",
  id: 25,
  category: "signs",
  image: "images/signs/40.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
    ar: ["ممنوع التجاوز", "نهاية الأفضلية", "أفضلية المرور من الجهة المقابلة"],
    fr: ["Dépassement interdit", "Fin de priorité", "Priorité sens inverse"],
    en: ["No overtaking", "End of priority", "Priority to oncoming traffic"]
  },
  correct: 0
},

{
  type: "sign",
  id: 26,
  category: "signs",
  image: "images/signs/41.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
    ar: ["طريق باتجاه واحد", "ممنوع الدخول", "توقف"],
    fr: ["Sens unique", "Accès interdit", "Stop"],
    en: ["One way road", "No entry", "Stop"]
  },
  correct: 2
},

{
  type: "sign",
  id: 27,
  category: "signs",
  image: "images/signs/42.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
    ar: ["طريق باتجاه واحد", "ممنوع الوقوف", "ممنوع الدخول"],
    fr: ["Sens unique", "Stationnement interdit", "Accès interdit"],
    en: ["One way road", "No parking", "No entry"]
  },
  correct: 2
},

{
  type: "sign",
  id: 28,
  category: "signs",
  image: "images/signs/43.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
    ar: ["أخطار متنوعة", "ممنوع الوقوف", "ممنوع المرور"],
    fr: ["Danger divers", "Stationnement interdit", "Circulation interdite"],
    en: ["Various dangers", "No parking", "No traffic"]
  },
  correct: 2
},

{
  type: "sign",
  id: 29,
  category: "signs",
  image: "images/signs/44.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
    ar: ["ممنوع التجاوز للشاحنات", "ممنوع المرور", "ممنوع التجاوز"],
    fr: ["Dépassement interdit aux camions", "Accès interdit", "Dépassement interdit"],
    en: ["No overtaking for trucks", "No entry", "No overtaking"]
  },
  correct: 0
},

{
  type: "sign",
  id: 30,
  category: "signs",
  image: "images/signs/45.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
    ar: ["30 كلم/س السرعة القصوى", "80 كلم/س السرعة الدنيا", "أفضلية أمامك"],
    fr: ["Vitesse max 30 km/h", "Vitesse min 80 km/h", "Priorité devant"],
    en: ["Max speed 30 km/h", "Min speed 80 km/h", "Priority ahead"]
  },
  correct: 0
},

{
  type: "sign",
  id: 31,
  category: "signs",
  image: "images/signs/46.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
    ar: ["مسرح", "ممنوع الوقوف", "ممنوع التزمير"],
    fr: ["Théâtre", "Stationnement interdit", "Usage du klaxon interdit"],
    en: ["Theatre", "No parking", "You are not allowed to sound your horn"]
  },
  correct: 2
},

{
  type: "sign",
  id: 32,
  category: "signs",
  image: "images/signs/47.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
    ar: ["طريق مخصص للشاحنات", "مسموح التجاوز للشاحنات", "ممنوع التجاوز للشاحنات"],
    fr: ["Route réservée aux camions", "Les camions peuvent dépasser", "Les camions ne peuvent pas dépasser"],
    en: ["Road reserved for trucks", "Trucks can overtake", "Trucks cannot overtake"]
  },
  correct: 2
},

{
  type: "sign",
  id: 33,
  category: "signs",
  image: "images/signs/48.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
    ar: ["مرور عربات الحيوانات مسموح", "ممنوع مرور المشاة", "ممنوع مرور عربات الحيوانات"],
    fr: ["Les charrettes à animaux sont autorisées", "Passage interdit aux piétons", "Passage interdit aux charrettes à animaux"],
    en: ["Animal carts allowed", "No entry for pedestrians", "No entry for animal carts"]
  },
  correct: 2
},

{
  type: "sign",
  id: 34,
  category: "signs",
  image: "images/signs/49.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
    ar: ["ممنوع مرور جميع أنواع المركبات", "ممر مخصص للمشاة", "ممنوع مرور المشاة"],
    fr: ["Passage interdit à tous les véhicules à moteur", "Voie réservée aux piétons", "Passage interdit aux piétons"],
    en: ["No entry to all types of motor vehicles", "Lane reserved for pedestrians", "No entry for pedestrians"]
  },
  correct: 2
},

{
  type: "sign",
  id: 35,
  category: "signs",
  image: "images/signs/50.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
    ar: ["ممر إجباري للسيارات", "ممر مخصص للدراجات", "ممنوع مرور الدراجات"],
    fr: ["Voie obligatoire pour les véhicules à moteur", "Voie réservée aux vélos", "Passage interdit aux vélos"],
    en: ["Compulsory path for motor vehicles", "Lane reserved for bikes", "No entry for bikes"]
  },
  correct: 2
},

{
  type: "sign",
  id: 36,
  category: "signs",
  image: "images/signs/51.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
    ar: ["مرور الدراجات", "ممر للدراجات النارية", "ممنوع مرور الدراجات النارية"],
    fr: ["Passage des cycles", "Voie réservée aux motos", "Passage interdit aux motos"],
    en: ["Cycles crossing", "Motorbikes lane", "No entry for motorbikes"]
  },
  correct: 2
},

{
  type: "sign",
  id: 37,
  category: "signs",
  image: "images/signs/52.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
    ar: ["ممنوع وقوف عربات اليد هنا", "ممر مخصص لعربات اليد", "ممنوع مرور عربات اليد"],
    fr: ["Stationnement interdit aux poussettes", "Voie réservée aux poussettes", "Passage interdit aux poussettes"],
    en: ["Trolleys cannot be parked here", "Lane reserved for trolleys", "No entry for trolleys"]
  },
  correct: 2
},

{
  type: "sign",
  id: 38,
  category: "signs",
  image: "images/signs/53.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
    ar: ["ممنوع وقوف السيارات", "طريق مخصص للسيارات", "ممنوع مرور جميع أنواع السيارات"],
    fr: ["Stationnement interdit aux voitures", "Voie réservée aux voitures", "Passage interdit aux véhicules de tous genres"],
    en: ["No parking", "Road reserved for motor vehicles", "No entry to all types of motor vehicles"]
  },
  correct: 2
},

{
  type: "sign",
  id: 39,
  category: "signs",
  image: "images/signs/55.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
    ar: ["ممنوع مرور الشاحنات التي يزيد طولها عن 2.3 متر", "ممنوع مرور الشاحنات", "ممنوع مرور المركبات التي يزيد عرضها عن 2.3 متر"],
    fr: ["Passage interdit aux camions de plus de 2,3 m de longueur", "Passage interdit aux camions", "Passage interdit aux voitures de plus de 2,3 m de largeur"],
    en: ["No entry for trucks longer than 2.3 m", "No entry for trucks", "No entry for vehicles wider than 2.3 m"]
  },
  correct: 2
},

{
  type: "sign",
  id: 40,
  category: "signs",
  image: "images/signs/56.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
    ar: ["اتجاه إجباري للشاحنات", "ممنوع مرور الشاحنات التي يزيد وزنها عن 3.5 طن", "ممنوع مرور الشاحنات التي يزيد علوها عن 3.5 متر"],
    fr: ["Direction obligatoire pour les camions", "Passage interdit aux camions de plus de 3.5 tonnes", "Passage interdit aux camions de plus de 3,5 m de hauteur"],
    en: ["Compulsory direction for trucks", "No entry for trucks over 3.5 tons", "No entry for trucks over 3.5 m in height"]
  },
  correct: 2
},



{
  type: "sign",
  id: 41,
  category: "signs",
  image: "images/signs/57.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
    ar: ["ممنوع مرور المركبات التي يزيد وزنها عن 5 طن", "ممنوع مرور الشاحنات", "ممنوع المرور"],
    fr: ["Passage interdit aux véhicules de plus de 5 tonnes", "Passage interdit aux camions", "Accès interdit"],
    en: ["No entry for vehicles over 5 tons", "No entry for trucks", "No entry"]
  },
  correct: 0
},

{
  type: "sign",
  id: 42,
  category: "signs",
  image: "images/signs/58.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
    ar: ["ممنوع المرور", "ممنوع الالتفاف", "ممنوع الدوران"],
    fr: ["Accès interdit", "Demi-tour interdit", "Tourner interdit"],
    en: ["No entry", "No U-turn", "No turning"]
  },
  correct: 1
},

{
  type: "sign",
  id: 43,
  category: "signs",
  image: "images/signs/59.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
    ar: ["ممنوع الانعطاف يسار", "ممنوع الانعطاف يمين", "ممنوع الالتفاف"],
    fr: ["Tourner à gauche interdit", "Tourner à droite interdit", "Demi-tour interdit"],
    en: ["No left turn", "No right turn", "No U-turn"]
  },
  correct: 0
},

{
  type: "sign",
  id: 44,
  category: "signs",
  image: "images/signs/60.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
    ar: ["ممنوع الانعطاف يمين", "ممنوع الانعطاف يسار", "ممنوع الالتفاف"],
    fr: ["Tourner à droite interdit", "Tourner à gauche interdit", "Demi-tour interdit"],
    en: ["No right turn", "No left turn", "No U-turn"]
  },
  correct: 0
},

{
  type: "sign",
  id: 45,
  category: "signs",
  image: "images/signs/61.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
    ar: ["اتجاه إجباري إلى اليمين", "اتجاه إجباري إلى اليسار", "ممنوع المرور"],
    fr: ["Direction obligatoire à droite", "Direction obligatoire à gauche", "Accès interdit"],
    en: ["Mandatory right", "Mandatory left", "No entry"]
  },
  correct: 0
},

{
  type: "sign",
  id: 46,
  category: "signs",
  image: "images/signs/62.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
    ar: ["اتجاه إجباري إلى اليسار", "اتجاه إجباري إلى اليمين", "ممنوع المرور"],
    fr: ["Direction obligatoire à gauche", "Direction obligatoire à droite", "Accès interdit"],
    en: ["Mandatory left", "Mandatory right", "No entry"]
  },
  correct: 0
},

{
  type: "sign",
  id: 47,
  category: "signs",
  image: "images/signs/63.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
    ar: ["اتجاه إجباري مستقيم", "ممنوع المرور", "ممنوع التجاوز"],
    fr: ["Direction obligatoire tout droit", "Accès interdit", "Dépassement interdit"],
    en: ["Straight ahead only", "No entry", "No overtaking"]
  },
  correct: 0
},

{
  type: "sign",
  id: 48,
  category: "signs",
  image: "images/signs/64.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
    ar: ["اتجاه إجباري يمين أو يسار", "ممنوع المرور", "ممنوع الالتفاف"],
    fr: ["Direction obligatoire à droite ou à gauche", "Accès interdit", "Demi-tour interdit"],
    en: ["Mandatory right or left", "No entry", "No U-turn"]
  },
  correct: 0
},

{
  type: "sign",
  id: 49,
  category: "signs",
  image: "images/signs/65.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
    ar: ["اتجاه إجباري يمين أو مستقيم", "اتجاه إجباري يسار أو مستقيم", "ممنوع المرور"],
    fr: ["Direction obligatoire à droite ou tout droit", "Direction obligatoire à gauche ou tout droit", "Accès interdit"],
    en: ["Mandatory right or straight", "Mandatory left or straight", "No entry"]
  },
  correct: 0
},

{
  type: "sign",
  id: 50,
  category: "signs",
  image: "images/signs/66.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
    ar: ["اتجاه إجباري يسار أو مستقيم", "اتجاه إجباري يمين أو مستقيم", "ممنوع المرور"],
    fr: ["Direction obligatoire à gauche ou tout droit", "Direction obligatoire à droite ou tout droit", "Accès interdit"],
    en: ["Mandatory left or straight", "Mandatory right or straight", "No entry"]
  },
  correct: 0
},


{
  type: "sign",
  id: 51,
  category: "signs",
  image: "images/signs/67.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
    ar: ["نهاية جميع الممنوعات", "ممنوع المرور", "نهاية تحديد السرعة"],
    fr: ["Fin de toutes les interdictions", "Accès interdit", "Fin limitation de vitesse"],
    en: ["End of all restrictions", "No entry", "End of speed limit"]
  },
  correct: 0
},

{
  type: "sign",
  id: 52,
  category: "signs",
  image: "images/signs/68.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
    ar: ["نهاية منع التجاوز", "ممنوع التجاوز", "نهاية تحديد السرعة"],
    fr: ["Fin interdiction de dépasser", "Dépassement interdit", "Fin limitation vitesse"],
    en: ["End of no overtaking", "No overtaking", "End of speed limit"]
  },
  correct: 0
},

{
  type: "sign",
  id: 53,
  category: "signs",
  image: "images/signs/69.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
    ar: ["نهاية منع التجاوز للشاحنات", "ممنوع التجاوز للشاحنات", "ممر للشاحنات"],
    fr: ["Fin interdiction camions", "Camions interdits de dépasser", "Voie camions"],
    en: ["End no overtaking trucks", "Trucks no overtaking", "Truck lane"]
  },
  correct: 0
},

{
  type: "sign",
  id: 54,
  category: "signs",
  image: "images/signs/70.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
    ar: ["طريق اتجاه واحد", "اتجاه إجباري", "أفضلية المرور"],
    fr: ["Sens unique", "Direction obligatoire", "Priorité"],
    en: ["One way road", "Mandatory direction", "Priority"]
  },
  correct: 0
},

{
  type: "sign",
  id: 55,
  category: "signs",
  image: "images/signs/71.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
    ar: ["موقف سيارات", "ممنوع الوقوف", "ممنوع التوقف"],
    fr: ["Parking", "Stationnement interdit", "Arrêt interdit"],
    en: ["Parking", "No parking", "No stopping"]
  },
  correct: 0
},

{
  type: "sign",
  id: 56,
  category: "signs",
  image: "images/signs/72.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
    ar: ["موقف سيارات خاص", "موقف سيارات إجباري", "ممنوع الوقوف"],
    fr: ["Parking réservé", "Parking obligatoire", "Stationnement interdit"],
    en: ["Reserved parking", "Mandatory parking", "No parking"]
  },
  correct: 0
},

{
  type: "sign",
  id: 57,
  category: "signs",
  image: "images/signs/73.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
    ar: ["موقف سيارات للمعاقين", "موقف سيارات", "موقف خاص"],
    fr: ["Parking handicapés", "Parking", "Parking réservé"],
    en: ["Disabled parking", "Parking", "Reserved parking"]
  },
  correct: 0
},

{
  type: "sign",
  id: 58,
  category: "signs",
  image: "images/signs/74.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
    ar: ["محطة وقود", "موقف سيارات", "ممنوع الوقوف"],
    fr: ["Station-service", "Parking", "Stationnement interdit"],
    en: ["Gas station", "Parking", "No parking"]
  },
  correct: 0
},

{
  type: "sign",
  id: 59,
  category: "signs",
  image: "images/signs/75.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
    ar: ["مستشفى", "عيادة", "موقف سيارات"],
    fr: ["Hôpital", "Clinique", "Parking"],
    en: ["Hospital", "Clinic", "Parking"]
  },
  correct: 0
},

{
  type: "sign",
  id: 60,
  category: "signs",
  image: "images/signs/76.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
    ar: ["هاتف", "مستشفى", "شرطة"],
    fr: ["Téléphone", "Hôpital", "Police"],
    en: ["Telephone", "Hospital", "Police"]
  },
  correct: 0
},



{
  type: "sign",
  id: 61,
  category: "signs",
  image: "images/signs/77.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
    ar: ["مطعم", "فندق", "مقهى"],
    fr: ["Restaurant", "Hôtel", "Café"],
    en: ["Restaurant", "Hotel", "Cafe"]
  },
  correct: 0
},

{
  type: "sign",
  id: 62,
  category: "signs",
  image: "images/signs/78.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
    ar: ["فندق", "مطعم", "مقهى"],
    fr: ["Hôtel", "Restaurant", "Café"],
    en: ["Hotel", "Restaurant", "Cafe"]
  },
  correct: 0
},

{
  type: "sign",
  id: 63,
  category: "signs",
  image: "images/signs/79.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
    ar: ["مقهى", "مطعم", "فندق"],
    fr: ["Café", "Restaurant", "Hôtel"],
    en: ["Cafe", "Restaurant", "Hotel"]
  },
  correct: 0
},

{
  type: "sign",
  id: 64,
  category: "signs",
  image: "images/signs/80.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
    ar: ["مخيم", "فندق", "مطعم"],
    fr: ["Camping", "Hôtel", "Restaurant"],
    en: ["Camping", "Hotel", "Restaurant"]
  },
  correct: 0
},

{
  type: "sign",
  id: 65,
  category: "signs",
  image: "images/signs/81.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
    ar: ["مكان للتنزه", "مطعم", "فندق"],
    fr: ["Aire de pique-nique", "Restaurant", "Hôtel"],
    en: ["Picnic area", "Restaurant", "Hotel"]
  },
  correct: 0
},

{
  type: "sign",
  id: 66,
  category: "signs",
  image: "images/signs/82.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
    ar: ["موقف للحافلات", "موقف سيارات", "محطة وقود"],
    fr: ["Arrêt d'autobus", "Parking", "Station-service"],
    en: ["Bus stop", "Parking", "Gas station"]
  },
  correct: 0
},

{
  type: "sign",
  id: 67,
  category: "signs",
  image: "images/signs/83.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
    ar: ["محطة قطار", "موقف سيارات", "محطة حافلات"],
    fr: ["Gare", "Parking", "Arrêt d'autobus"],
    en: ["Train station", "Parking", "Bus stop"]
  },
  correct: 0
},

{
  type: "sign",
  id: 68,
  category: "signs",
  image: "images/signs/84.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
    ar: ["مطار", "ميناء", "محطة قطار"],
    fr: ["Aéroport", "Port", "Gare"],
    en: ["Airport", "Port", "Train station"]
  },
  correct: 0
},

{
  type: "sign",
  id: 69,
  category: "signs",
  image: "images/signs/85.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
    ar: ["ميناء", "مطار", "محطة قطار"],
    fr: ["Port", "Aéroport", "Gare"],
    en: ["Port", "Airport", "Train station"]
  },
  correct: 0
},

{
  type: "sign",
  id: 70,
  category: "signs",
  image: "images/signs/86.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
    ar: ["موقف تاكسي", "موقف حافلات", "موقف سيارات"],
    fr: ["Station taxi", "Arrêt bus", "Parking"],
    en: ["Taxi station", "Bus stop", "Parking"]
  },
  correct: 0
},


{
  type: "sign",
  id: 71,
  category: "signs",
  image: "images/signs/87.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
    ar: ["طريق سريع", "طريق عادي", "نهاية طريق سريع"],
    fr: ["Autoroute", "Route normale", "Fin d'autoroute"],
    en: ["Highway", "Normal road", "End of highway"]
  },
  correct: 0
},

{
  type: "sign",
  id: 72,
  category: "signs",
  image: "images/signs/88.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
    ar: ["نهاية طريق سريع", "طريق سريع", "طريق رئيسي"],
    fr: ["Fin d'autoroute", "Autoroute", "Route principale"],
    en: ["End of highway", "Highway", "Main road"]
  },
  correct: 0
},

{
  type: "sign",
  id: 73,
  category: "signs",
  image: "images/signs/89.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
    ar: ["طريق للسيارات فقط", "ممنوع الشاحنات", "ممنوع المرور"],
    fr: ["Route réservée aux automobiles", "Camions interdits", "Accès interdit"],
    en: ["Road for motor vehicles only", "No trucks", "No entry"]
  },
  correct: 0
},

{
  type: "sign",
  id: 74,
  category: "signs",
  image: "images/signs/90.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
    ar: ["نهاية طريق للسيارات فقط", "طريق سريع", "ممنوع المرور"],
    fr: ["Fin route automobile", "Autoroute", "Accès interdit"],
    en: ["End of motor road", "Highway", "No entry"]
  },
  correct: 0
},

{
  type: "sign",
  id: 75,
  category: "signs",
  image: "images/signs/91.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
    ar: ["طريق رئيسي", "طريق فرعي", "نهاية طريق"],
    fr: ["Route prioritaire", "Route secondaire", "Fin de route"],
    en: ["Priority road", "Secondary road", "End of road"]
  },
  correct: 0
},

{
  type: "sign",
  id: 76,
  category: "signs",
  image: "images/signs/92.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
    ar: ["نهاية طريق رئيسي", "طريق رئيسي", "تقاطع"],
    fr: ["Fin de route prioritaire", "Route prioritaire", "Intersection"],
    en: ["End of priority road", "Priority road", "Intersection"]
  },
  correct: 0
},

{
  type: "sign",
  id: 77,
  category: "signs",
  image: "images/signs/93.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
    ar: ["تقاطع مع طريق فرعي", "تقاطع طرق", "ممنوع المرور"],
    fr: ["Intersection avec route secondaire", "Intersection", "Accès interdit"],
    en: ["Intersection with secondary road", "Intersection", "No entry"]
  },
  correct: 0
},

{
  type: "sign",
  id: 78,
  category: "signs",
  image: "images/signs/94.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
    ar: ["تقاطع من اليمين", "تقاطع من اليسار", "تقاطع طرق"],
    fr: ["Intersection à droite", "Intersection à gauche", "Intersection"],
    en: ["Right intersection", "Left intersection", "Intersection"]
  },
  correct: 0
},

{
  type: "sign",
  id: 79,
  category: "signs",
  image: "images/signs/95.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
    ar: ["تقاطع من اليسار", "تقاطع من اليمين", "تقاطع طرق"],
    fr: ["Intersection à gauche", "Intersection à droite", "Intersection"],
    en: ["Left intersection", "Right intersection", "Intersection"]
  },
  correct: 0
},

{
  type: "sign",
  id: 80,
  category: "signs",
  image: "images/signs/96.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
    ar: ["تقاطع طرق", "تقاطع مع طريق رئيسي", "تقاطع بدون أفضلية"],
    fr: ["Intersection", "Intersection avec route principale", "Intersection sans priorité"],
    en: ["Intersection", "Intersection with main road", "Intersection without priority"]
  },
  correct: 0
},

{
  type: "sign",
  id: 81,
  category: "signs",
  image: "images/signs/97.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
    ar: ["مستشفى قريب", "إسعاف", "صيدلية"],
    fr: ["Hôpital proche", "Ambulance", "Pharmacie"],
    en: ["Hospital nearby", "Ambulance", "Pharmacy"]
  },
  correct: 0
},

{
  type: "sign",
  id: 82,
  category: "signs",
  image: "images/signs/98.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
    ar: ["شرطة", "إطفاء", "مستشفى"],
    fr: ["Police", "Pompiers", "Hôpital"],
    en: ["Police", "Fire station", "Hospital"]
  },
  correct: 1
},

{
  type: "sign",
  id: 83,
  category: "signs",
  image: "images/signs/99.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
    ar: ["شرطة", "مستشفى", "إطفاء"],
    fr: ["Police", "Hôpital", "Pompiers"],
    en: ["Police", "Hospital", "Fire station"]
  },
  correct: 0
},

{
  type: "sign",
  id: 84,
  category: "signs",
  image: "images/signs/100.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
    ar: ["مركز إسعاف", "مستشفى", "صيدلية"],
    fr: ["Centre ambulance", "Hôpital", "Pharmacie"],
    en: ["Ambulance center", "Hospital", "Pharmacy"]
  },
  correct: 2
},

{
  type: "sign",
  id: 85,
  category: "signs",
  image: "images/signs/101.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
    ar: ["فندق", "مطعم", "مقهى"],
    fr: ["Hôtel", "Restaurant", "Café"],
    en: ["Hotel", "Restaurant", "Cafe"]
  },
  correct: 1
},

{
  type: "sign",
  id: 86,
  category: "signs",
  image: "images/signs/102.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
    ar: ["هاتف", "مستشفى", "شرطة"],
    fr: ["Téléphone", "Hôpital", "Police"],
    en: ["Telephone", "Hospital", "Police"]
  },
  correct: 0
},

{
  type: "sign",
  id: 87,
  category: "signs",
  image: "images/signs/103.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
    ar: ["محطة وقود", "موقف سيارات", "مقهى"],
    fr: ["Station-service", "Parking", "Café"],
    en: ["Gas station", "Parking", "Cafe"]
  },
  correct: 0
},

{
  type: "sign",
  id: 88,
  category: "signs",
  image: "images/signs/104.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
    ar: ["موقف سيارات", "فندق", "مستشفى"],
    fr: ["Parking", "Hôtel", "Hôpital"],
    en: ["Parking", "Hotel", "Hospital"]
  },
  correct: 0
},

{
  type: "sign",
  id: 89,
  category: "signs",
  image: "images/signs/105.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
    ar: ["مطار", "ميناء", "محطة قطار"],
    fr: ["Aéroport", "Port", "Gare"],
    en: ["Airport", "Port", "Train station"]
  },
  correct: 2
},

{
  type: "sign",
  id: 90,
  category: "signs",
  image: "images/signs/106.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
    ar: ["نهاية الطريق", "طريق مسدود", "ممنوع المرور"],
    fr: ["Fin de route", "Impasse", "Accès interdit"],
    en: ["End of road", "Dead end", "No entry"]
  },
  correct: 1
},

{
  type: "sign",
  id: 91,
  category: "signs",
  image: "images/signs/107.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
    ar: ["طريق مسدود", "ممنوع المرور", "نهاية الطريق"],
    fr: ["Impasse", "Accès interdit", "Fin de route"],
    en: ["Dead end", "No entry", "End of road"]
  },
  correct: 0
},

{
  type: "sign",
  id: 92,
  category: "signs",
  image: "images/signs/108.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
    ar: ["اتجاه إجباري", "ممنوع المرور", "طريق مسدود"],
    fr: ["Direction obligatoire", "Accès interdit", "Impasse"],
    en: ["Mandatory direction", "No entry", "Dead end"]
  },
  correct: 0
},

{
  type: "sign",
  id: 93,
  category: "signs",
  image: "images/signs/109.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
    ar: ["موقف سيارات", "ممنوع الوقوف", "ممنوع التوقف"],
    fr: ["Parking", "Stationnement interdit", "Arrêt interdit"],
    en: ["Parking", "No parking", "No stopping"]
  },
  correct: 1
},

{
  type: "sign",
  id: 94,
  category: "signs",
  image: "images/signs/110.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
    ar: ["ممنوع التوقف", "ممنوع الوقوف", "موقف سيارات"],
    fr: ["Arrêt interdit", "Stationnement interdit", "Parking"],
    en: ["No stopping", "No parking", "Parking"]
  },
  correct: 0
},

{
  type: "sign",
  id: 95,
  category: "signs",
  image: "images/signs/111.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
    ar: ["ممنوع الوقوف والتوقف", "ممنوع المرور", "موقف سيارات"],
    fr: ["Arrêt et stationnement interdits", "Accès interdit", "Parking"],
    en: ["No stopping and parking", "No entry", "Parking"]
  },
  correct: 0
},

{
  type: "sign",
  id: 96,
  category: "signs",
  image: "images/signs/112.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
    ar: ["ممنوع المرور", "نهاية جميع الممنوعات", "نهاية الطريق"],
    fr: ["Accès interdit", "Fin de toutes les interdictions", "Fin de route"],
    en: ["No entry", "End of all restrictions", "End of road"]
  },
  correct: 1
},

{
  type: "sign",
  id: 97,
  category: "signs",
  image: "images/signs/113.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
    ar: ["ممنوع التجاوز", "نهاية منع التجاوز", "مسموح التجاوز"],
    fr: ["Dépassement interdit", "Fin interdiction de dépasser", "Dépassement autorisé"],
    en: ["No overtaking", "End of no overtaking", "Overtaking allowed"]
  },
  correct: 1
},

{
  type: "sign",
  id: 98,
  category: "signs",
  image: "images/signs/114.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
    ar: ["ممنوع التجاوز للشاحنات", "نهاية منع التجاوز للشاحنات", "مسموح للشاحنات"],
    fr: ["Dépassement camions interdit", "Fin interdiction camions", "Camions autorisés"],
    en: ["No overtaking trucks", "End no overtaking trucks", "Trucks allowed"]
  },
  correct: 1
},

{
  type: "sign",
  id: 99,
  category: "signs",
  image: "images/signs/115.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
    ar: ["طريق سريع", "نهاية طريق سريع", "طريق للسيارات فقط"],
    fr: ["Autoroute", "Fin d'autoroute", "Route automobile"],
    en: ["Highway", "End of highway", "Motor road"]
  },
  correct: 1
},

{
  type: "sign",
  id: 100,
  category: "signs",
  image: "images/signs/116.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
    ar: ["نهاية طريق للسيارات فقط", "طريق سريع", "طريق رئيسي"],
    fr: ["Fin route automobile", "Autoroute", "Route prioritaire"],
    en: ["End of motor road", "Highway", "Priority road"]
  },
  correct: 0
},

{
  type: "sign",
  id: 101,
  category: "signs",
  image: "images/signs/117.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
    ar: ["نهاية طريق رئيسي", "طريق رئيسي", "تقاطع"],
    fr: ["Fin route prioritaire", "Route prioritaire", "Intersection"],
    en: ["End of priority road", "Priority road", "Intersection"]
  },
  correct: 0
},

{
  type: "sign",
  id: 102,
  category: "signs",
  image: "images/signs/118.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
    ar: ["تقاطع طرق", "تقاطع بدون أفضلية", "تقاطع مع طريق رئيسي"],
    fr: ["Intersection", "Intersection sans priorité", "Intersection avec route principale"],
    en: ["Intersection", "Intersection without priority", "Intersection with main road"]
  },
  correct: 2
}




];






 










































  // 👉 truck


  









  // 👉 add more questions here























