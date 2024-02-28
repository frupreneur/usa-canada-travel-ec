const DATABASE = [
  {
    route: "diabetes-signs-and-symptoms",
    title: "Diabetes Signs and Symptoms",
    description:
      "The warning signs can be so mild that you don't notice them. That's especially true of type 2 diabetes. Some people don't find out they have it until they get problems from long-term damage caused by the disease",
    result: 0,
    idx: 0,
    high: "Your quiz results suggest a high likelihood of Diabetes. Please consult a healthcare professional for further evaluation and guidance.",
    low: "Your quiz results suggest a low likelihood of Diabetes. However, if you have concerns or symptoms, it's always best to consult a healthcare professional for personalized advice.",
    questions: [
      {
        question: "Do you experience slow-healing sores or cuts/wounds?",
        answers: ["yes", "no", "not sure"],
        correct: "yes",
      },
      {
        question: "Do you feel itchy skin in some areas of your body?",
        answers: ["yes", "no", "not sure"],
        correct: "yes",
      },
      {
        question: "Do you have yeast infections?",
        answers: ["yes", "no", "not sure"],
        correct: "yes",
      },
      {
        question: "Have you experienced weight gain?",
        answers: ["yes", "no", "not sure"],
        correct: "yes",
      },
      {
        question: "Do you feel numbness and tingling of the hands and feet?",
        answers: ["yes", "no", "not sure"],
        correct: "yes",
      },
      {
        question: "Have you had recent eye issues??",
        answers: ["yes", "no", "not sure"],
        correct: "yes",
      },
    ],
  },
  {
    route: "liver-cancer-signs-and-symptoms",
    title: "Liver Cancer Signs and Symptoms",
    description:
      "Liver cancer is cancer that begins in the cells of your liver. Your liver is a football-sized organ that sits in the upper right portion of your abdomen, beneath your diaphragm and above your stomach. ",
    result: 0,
    idx: 0,
    high: "Your quiz results suggest a high likelihood of Liver Cancer. Please consult a healthcare professional for further evaluation and guidance.",
    low: "Your quiz results suggest a low likelihood of Liver Cancer. However, if you have concerns or symptoms, it's always best to consult a healthcare professional for personalized advice.",
    questions: [
      {
        question:
          "Have you experienced a loss of weight without you trying to lose weight?",
        answers: ["yes", "no", "not sure"],
        correct: "yes",
      },
      {
        question: "Loss of appetite?",
        answers: ["yes", "no", "not sure"],
        correct: "yes",
      },
      {
        question: "Upper abdominal pain",
        answers: ["yes", "no", "not sure"],
        correct: "yes",
      },
      {
        question: "Nausea and vomiting?",
        answers: ["yes", "no", "not sure"],
        correct: "yes",
      },
      {
        question: "General weakness and fatigue?",
        answers: ["yes", "no", "not sure"],
        correct: "yes",
      },
      {
        question: "Is your abdomen swelling?",
        answers: ["yes", "no", "not sure"],
        correct: "yes",
      },
      {
        question:
          "Doo you have yellow discoloration of your skin and the whites of your eyes (jaundice)?",
        answers: ["yes", "no", "not sure"],
        correct: "yes",
      },
      {
        question: "Do you secret white, chalky stools?",
        answers: ["yes", "no", "not sure"],
        correct: "yes",
      },
    ],
  },
  {
    route: "breast-cancer-signs-and-symptoms",
    title: "Breast Cancer Signs and Symptoms",
    description:
      "Breast cancer is a disease in which cells in the breast grow out of control. There are different kinds of breast cancer. The kind of breast cancer depends on which cells in the breast turn into cancer.",
    result: 0,
    idx: 0,
    high: "Your quiz results suggest a high likelihood of Breast Cancer. Please consult a healthcare professional for further evaluation and guidance.",
    low: "Your quiz results suggest a low likelihood of Breast Cancer. However, if you have concerns or symptoms, it's always best to consult a healthcare professional for personalized advice.",
    questions: [
      {
        question: "Do you have a lump in the breast or underarm (armpit)?",
        answers: ["yes", "no", "not sure"],
        correct: "yes",
      },
      {
        question: "Are some parts of your breast thickening or swelling?",
        answers: ["yes", "no", "not sure"],
        correct: "yes",
      },
      {
        question: "Do you have any irritation or dimpling of your breast skin?",
        answers: ["yes", "no", "not sure"],
        correct: "yes",
      },
      {
        question:
          "Do you have redness or flaky skin in the nipple area or the breast?",
        answers: ["yes", "no", "not sure"],
        correct: "yes",
      },
      {
        question:
          "Do you feel pulling in of the nipple or pain in the nipple area?",
        answers: ["yes", "no", "not sure"],
        correct: "yes",
      },
      {
        question:
          "Do you experience discharge other than breast milk, including blood?",
        answers: ["yes", "no", "not sure"],
        correct: "yes",
      },
      {
        question:
          "Is there any change in the size or the shape of the breast.?",
        answers: ["yes", "no", "not sure"],
        correct: "yes",
      },
      {
        question: "Do you feel pain in any area of the breast.?",
        answers: ["yes", "no", "not sure"],
        correct: "yes",
      },
    ],
  },
  {
    route: "hepatitis-signs-and-symptoms",
    title: "Hepatitis Signs and Symptoms",
    description:
      "Hepatitis refers to an inflammatory condition of the liver. It is commonly the result of a viral infection, but there are other possible causes of hepatitis ",
    result: 0,
    idx: 0,
    high: "Your quiz results suggest a high likelihood of Hepatitis. Please consult a healthcare professional for further evaluation and guidance.",
    low: "Your quiz results suggest a low likelihood of Hepatitis. However, if you have concerns or symptoms, it's always best to consult a healthcare professional for personalized advice.",
    questions: [
      {
        question: "Do you feel fatigue/tired?",
        answers: ["yes", "no", "not sure"],
        correct: "yes",
      },
      {
        question: "Do you have body and muscle aches?",
        answers: ["yes", "no", "not sure"],
        correct: "yes",
      },
      {
        question: "Do you have a sore throat?",
        answers: ["yes", "no", "not sure"],
        correct: "yes",
      },
      {
        question: "Is your urine Dark in color?",
        answers: ["yes", "no", "not sure"],
        correct: "yes",
      },
      {
        question: "is your stool pale?",
        answers: ["yes", "no", "not sure"],
        correct: "yes",
      },
      {
        question: "Do you experience abdominal pains?",
        answers: ["yes", "no", "not sure"],
        correct: "yes",
      },
      {
        question: "Do you have appetite",
        answers: ["yes", "no", "not sure"],
        correct: "no",
      },
      {
        question: "Have you lost weight recently?",
        answers: ["yes", "no", "not sure"],
        correct: "yes",
      },
      {
        question: "Do you have yellow skin and eyes?",
        answers: ["yes", "no", "not sure"],
        correct: "yes",
      },
    ],
  },
  {
    route: "syphilis-signs-and-symptoms",
    title: "Syphilis Signs and Symptoms",
    description:
      "Syphilis is a chronic bacterial infection that can be transmitted through sexual contact. Syphilis is caused by a type of bacteria known as Treponema pallidum.",
    result: 0,
    idx: 0,
    high: "Your quiz results suggest a high likelihood of Syphilis. Please consult a healthcare professional for further evaluation and guidance.",
    low: "Your quiz results suggest a low likelihood of Syphilis. However, if you have concerns or symptoms, it's always best to consult a healthcare professional for personalized advice.",
    questions: [
      {
        question:
          "Have you had a single sore or multiple sores on your Penis/Vagina/Anus/Rectum/lips?",
        answers: ["yes", "no", "not sure"],
        correct: "yes",
      },
      {
        question:
          "Do you experience rashes on the palms of your hands or bottom of your feet?",
        answers: ["yes", "no", "not sure"],
        correct: "yes",
      },
      {
        question: "Do you have a sore throat?",
        answers: ["yes", "no", "not sure"],
        correct: "yes",
      },
      {
        question: "Do you have swollen lymph glands",
        answers: ["yes", "no", "not sure"],
        correct: "yes",
      },
      {
        question: "is your stool pale?",
        answers: ["yes", "no", "not sure"],
        correct: "yes",
      },
      {
        question: "Do you have headaches?",
        answers: ["yes", "no", "not sure"],
        correct: "yes",
      },
      {
        question: "Do you have appetite",
        answers: ["yes", "no", "not sure"],
        correct: "no",
      },
      {
        question: "Have you lost weight recently?",
        answers: ["yes", "no", "not sure"],
        correct: "yes",
      },
      {
        question: "Are you fatigue (feeling very tired)?",
        answers: ["yes", "no", "not sure"],
        correct: "yes",
      },
      {
        question:
          "Do you hear a ringing, buzzing, roaring, or hissing in your ears (“tinnitus”)?",
        answers: ["yes", "no", "not sure"],
        correct: "yes",
      },
      {
        question: "Are you experiencing eye pain and/or red eyes?",
        answers: ["yes", "no", "not sure"],
        correct: "yes",
      },
    ],
  },
  {
    route: "chlamydia-signs-and-symptoms",
    title: "Chlamydia Signs and Symptoms",
    description:
      "Chlamydia is a common sexually transmitted infection (STI) caused by bacteria. You might not know you have chlamydia because many people don't have signs or symptoms, such as genital pain and discharge from the vagina or penis.",
    result: 0,
    idx: 0,
    high: "Your quiz results suggest a high likelihood of Chlamydia. Please consult a healthcare professional for further evaluation and guidance.",
    low: "Your quiz results suggest a low likelihood of Chlamydia. However, if you have concerns or symptoms, it's always best to consult a healthcare professional for personalized advice.",
    questions: [
      {
        question: "Do you have painful urination?",
        answers: ["yes", "no", "not sure"],
        correct: "yes",
      },
      {
        question: "Have you noticed discharges from your penis/vagina?",
        answers: ["yes", "no", "not sure"],
        correct: "yes",
      },
      {
        question: "Do you have lower abdominal pain?",
        answers: ["yes", "no", "not sure"],
        correct: "yes",
      },
      {
        question:
          "Do you feel itching or burning in and around your penis/vagina",
        answers: ["yes", "no", "not sure"],
        correct: "yes",
      },
      {
        question: "Do you pee more frequently than you normally do?",
        answers: ["yes", "no", "not sure"],
        correct: "yes",
      },
      {
        question:
          "Do you experience pain, discomfort, bleeding or a mucus-like discharge from your anus?",
        answers: ["yes", "no", "not sure"],
        correct: "yes",
      },
      {
        question: "Do you have a sore throat?",
        answers: ["yes", "no", "not sure"],
        correct: "yes",
      },
      {
        question:
          "Are you experiencing eye pain / red eyes or discharges from your eyes?",
        answers: ["yes", "no", "not sure"],
        correct: "yes",
      },
    ],
  },
  {
    route: "malaria-signs-and-symptoms",
    title: "Malaria Signs and Symptoms",
    description:
      "Malaria is a serious and sometimes life-threatening tropical disease that is caused by a parasite and spreads through mosquitoes",
    result: 0,
    idx: 0,
    high: "Your quiz results suggest a high likelihood of Malaria. Please consult a healthcare professional for further evaluation and guidance.",
    low: "Your quiz results suggest a low likelihood of Malaria. However, if you have concerns or symptoms, it's always best to consult a healthcare professional for personalized advice.",
    questions: [
      {
        question: "Do you have a Headache?",
        answers: ["yes", "no", "not sure"],
        correct: "yes",
      },
      {
        question: "Do you have cough?",
        answers: ["yes", "no", "not sure"],
        correct: "yes",
      },
      {
        question: "Do you feel very tired (fatigue)?",
        answers: ["yes", "no", "not sure"],
        correct: "yes",
      },
      {
        question: "Do you have diarrhea?",
        answers: ["yes", "no", "not sure"],
        correct: "yes",
      },
      {
        question: "Do you have Yellow skin (jaundice)?",
        answers: ["yes", "no", "not sure"],
        correct: "yes",
      },
      {
        question: "Do you experience Seizures/Confusion?",
        answers: ["yes", "no", "not sure"],
        correct: "yes",
      },
      {
        question: "Do you have bloody stools?",
        answers: ["yes", "no", "not sure"],
        correct: "yes",
      },
      {
        question: "Do you have abdominal pain?",
        answers: ["yes", "no", "not sure"],
        correct: "yes",
      },

      {
        question: "Do you have muscular or joint pains",
        answers: ["yes", "no", "not sure"],
        correct: "yes",
      },
      {
        question: "Do you breathe rapidly or have a rapid heart rate?",
        answers: ["yes", "no", "not sure"],
        correct: "yes",
      },
    ],
  }
];

export default DATABASE;
