const { useState } = React;
const {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} = Recharts;

const Dashboard = () => {
  const [activeGrade, setActiveGrade] = useState('grade3');

  const data = {
    "grade3": {
        "gender": {
            "بنات": 14967,
            "طفولة مبكرة": 10622,
            "بنين": 6222
        },
        "total_students": 31811,
        "sectors": {
            "الدمام": 9196,
            "حفر الباطن": 7943,
            "القطيف": 5833,
            "الجبيل": 2449,
            "القرية العليا": 292,
            "الخبر": 3254,
            "الخفجي": 1275,
            "بقيق": 663,
            "النعيرية": 554,
            "رأس تنورة": 273,
            "العديد": 79
        },
        "sector_by_gender": {
            "بنات": {
                "الدمام": 3675,
                "حفر الباطن": 5551,
                "الجبيل": 1073,
                "القطيف": 2005,
                "الخبر": 1524,
                "القرية العليا": 123,
                "الخفجي": 371,
                "النعيرية": 288,
                "بقيق": 210,
                "العديد": 57,
                "رأس تنورة": 90
            },
            "طفولة مبكرة": {
                "الدمام": 3405,
                "حفر الباطن": 982,
                "القطيف": 2497,
                "القرية العليا": 127,
                "الخبر": 1205,
                "الخفجي": 757,
                "الجبيل": 1070,
                "النعيرية": 153,
                "بقيق": 369,
                "رأس تنورة": 49,
                "العديد": 8
            },
            "بنين": {
                "الدمام": 2116,
                "حفر الباطن": 1410,
                "الخبر": 525,
                "الجبيل": 306,
                "بقيق": 84,
                "القطيف": 1331,
                "النعيرية": 113,
                "الخفجي": 147,
                "رأس تنورة": 134,
                "العديد": 14,
                "القرية العليا": 42
            }
        },
        "questions": [
            {
                "question": "7-أيُّ عددٍ يجعل الجملة العددية التالية صحيحة ٤ × ٦ = ٢٤ ⬜ × ٤ = ٢٤",
                "correct": 30648,
                "total": 31811,
                "percentage": 96.34
            },
            {
                "question": "6-معنى عبارة (أَطْبَقَ يَدَيْهِ):",
                "correct": 29718,
                "total": 31811,
                "percentage": 93.42
            },
            {
                "question": "2-أيّ الكلمات التالية وردت في النص بصيغة الجمع:",
                "correct": 29437,
                "total": 31811,
                "percentage": 92.54
            },
            {
                "question": "9-يمثّل الجدول درجات ثلاثة أجزاء من اختبار، كيف نجد الدرجة الكلّية للاختبار؟",
                "correct": 29392,
                "total": 31811,
                "percentage": 92.4
            },
            {
                "question": "2- الجملة التي توضّح خاصية العنصر المحايد في الجمع:",
                "correct": 29222,
                "total": 31811,
                "percentage": 91.86
            },
            {
                "question": "9-مرادف كلمة (تظاهر)",
                "correct": 29069,
                "total": 31811,
                "percentage": 91.38
            },
            {
                "question": "8- الحدث الذي يدلّ على ذكاء الأرنب الصغير:",
                "correct": 28264,
                "total": 31811,
                "percentage": 88.85
            },
            {
                "question": "4-مع أحمد ٧٥٠ ريالًا، اشترى حقيبة بـ ٤٨٥ ريالًا، فكم ريالًا بقي معه؟",
                "correct": 27857,
                "total": 31811,
                "percentage": 87.57
            },
            {
                "question": "10-في المكتبة ٣٢٠ كتابًا للقصص و٤٥٠ كتابًا للعلوم، أُعير منها ١٨٠ كتابًا، فكم كتابًا بقي في المكتبة؟",
                "correct": 27817,
                "total": 31811,
                "percentage": 87.44
            },
            {
                "question": "5-الدرس الذي تعلمته من القصة:",
                "correct": 27232,
                "total": 31811,
                "percentage": 85.61
            },
            {
                "question": "3-العبارة التي تُمثّل خاصية التجميع في عملية الجمع :",
                "correct": 27173,
                "total": 31811,
                "percentage": 85.42
            },
            {
                "question": "1-تقدير ناتج الجمع بالتقريب لأقرب ألف ٤٨٩٢ + ٣١٠٧ =",
                "correct": 26993,
                "total": 31811,
                "percentage": 84.85
            },
            {
                "question": "10-ما رأيك في تصرّف الثعلب؟",
                "correct": 26434,
                "total": 31811,
                "percentage": 83.1
            },
            {
                "question": "6-تقدير ناتج الطرح بالتقريب لأقرب مئة ٨١٢ − ٤٦٨ =",
                "correct": 26082,
                "total": 31811,
                "percentage": 81.99
            },
            {
                "question": "5-كان في الحديقة ١٦ شجرة تفاح، و١٤ شجرة برتقال، و١٠ أشجار ليمون، فإذا قُطِعَت ٣ أشجار من كل نوع، فكم شجرة بقيت في الحديقة؟",
                "correct": 25638,
                "total": 31811,
                "percentage": 80.59
            },
            {
                "question": "9-أيُ شخصية في القصة تصرّفت بذكاء وساعدت في تغيير نهاية الحدث؟",
                "correct": 25237,
                "total": 31811,
                "percentage": 79.33
            },
            {
                "question": "مُسْتَعْمِلًا التَّمْثِيلَ الْمُجَاوِرَ، أُجِيبُ عَمَّا يَلِي: كم تزيد درجة هيا عن درجة سمر؟",
                "correct": 25090,
                "total": 31811,
                "percentage": 78.87
            },
            {
                "question": "4-العلاقة بين حَذَرِ الأرنب ونجاته:",
                "correct": 24008,
                "total": 31811,
                "percentage": 75.47
            },
            {
                "question": "3-يدلُّ قول الأب: «إنَّ الثعلبَ يموتُ وفمُهُ مفتوحٌ»",
                "correct": 23288,
                "total": 31811,
                "percentage": 73.21
            },
            {
                "question": "7- الترتيب الصحيح لأحداث القصة:",
                "correct": 23009,
                "total": 31811,
                "percentage": 72.33
            }
        ]
    },
    "grade6": {
        "gender": {
            "بنين": 9706,
            "بنات": 17994
        },
        "total_students": 27700,
        "sectors": {
            "النعيرية": 426,
            "الدمام": 8423,
            "القطيف": 5268,
            "حفر الباطن": 6096,
            "الجبيل": 1913,
            "الخبر": 3510,
            "رأس تنورة": 275,
            "القرية العليا": 207,
            "الخفجي": 971,
            "بقيق": 501,
            "العديد": 110
        },
        "sector_by_gender": {
            "بنين": {
                "النعيرية": 120,
                "الدمام": 3271,
                "القطيف": 2082,
                "الخبر": 1255,
                "حفر الباطن": 1852,
                "الجبيل": 494,
                "الخفجي": 297,
                "رأس تنورة": 131,
                "بقيق": 101,
                "العديد": 27,
                "القرية العليا": 76
            },
            "بنات": {
                "الدمام": 5152,
                "حفر الباطن": 4244,
                "الجبيل": 1419,
                "رأس تنورة": 144,
                "القطيف": 3186,
                "الخبر": 2255,
                "القرية العليا": 131,
                "النعيرية": 306,
                "الخفجي": 674,
                "بقيق": 400,
                "العديد": 83
            }
        },
        "questions": [
            {
                "question": "الكلمة التي تُصنف \"اسم آلة\" من بين الكلمات التالية هي:",
                "correct": 26672,
                "total": 27700,
                "percentage": 96.29
            },
            {
                "question": "التصرف السليم عند رؤية شخص يقطع الأشجار لبيعها\"حطباً\" هو:",
                "correct": 26284,
                "total": 27700,
                "percentage": 94.89
            },
            {
                "question": "ضد كلمة \"الجافة\" الواردة في النص:",
                "correct": 25797,
                "total": 27700,
                "percentage": 93.13
            },
            {
                "question": "تتميز النباتات في المناطق الجافة بخصائص تمكنها من:",
                "correct": 25469,
                "total": 27700,
                "percentage": 91.95
            },
            {
                "question": "الكلمة التي احتوت على \"همزة متوسطة\" هي",
                "correct": 25011,
                "total": 27700,
                "percentage": 90.29
            },
            {
                "question": "ما مرادف كلمة \"النامي\" الواردة في النص ؟",
                "correct": 24758,
                "total": 27700,
                "percentage": 89.38
            },
            {
                "question": "خطر \"إضافي\" قد يهدد النباتات (غير الذي ورد في النص):",
                "correct": 24658,
                "total": 27700,
                "percentage": 89.02
            },
            {
                "question": "من الأخطار التي تواجه الغطاء النباتي في المملكة العربية السعودية:",
                "correct": 24515,
                "total": 27700,
                "percentage": 88.5
            },
            {
                "question": "خلط طالب الخلّ مع بيكربونات الصوديوم، فلاحظ تصاعد فقاعات غازية. ما الاستنتاج الصحيح؟",
                "correct": 24341,
                "total": 27700,
                "percentage": 87.87
            },
            {
                "question": "في نشاط استكشافي، طلب المعلم من الطلاب، تحديد المادة الأنسب التي تسمح بتحريك المروحة عند توصيلها بالنقطتين (1) و(2)",
                "correct": 23678,
                "total": 27700,
                "percentage": 85.48
            },
            {
                "question": "خلية جنسية في الإنسان تحتوي على 23 كروموسومًا، فكم يكون عدد الكروموسومات في البويضة المخصبة (اللاقحة)؟",
                "correct": 22673,
                "total": 27700,
                "percentage": 81.85
            },
            {
                "question": "وجد طالب صخرًا يحتوي على طبقات واضحة وبداخله بقايا كائنات. ما نوع الصخر غالبًا؟",
                "correct": 22601,
                "total": 27700,
                "percentage": 81.59
            },
            {
                "question": "إحدى السمات التالية لا تنطبق على الإنسان.",
                "correct": 22596,
                "total": 27700,
                "percentage": 81.57
            },
            {
                "question": "تعيش بعض أنواع البكتيريا داخل أمعاء الأبقار وتساعدها على هضم الغذاء، وفي المقابل تحصل البكتيريا على الغذاء والمأوى. ما نوع العلاقة بين البكتيريا والأبقار؟",
                "correct": 22252,
                "total": 27700,
                "percentage": 80.33
            },
            {
                "question": "دفع طالبٌ صندوقًا كما هو موضّح في الشكل التالي. ما مقدار الشغل المبذول (بالجول)؟",
                "correct": 21819,
                "total": 27700,
                "percentage": 78.77
            },
            {
                "question": "Column6",
                "correct": 20459,
                "total": 27700,
                "percentage": 73.86
            },
            {
                "question": "تُظهر الصورة طريقةً للمحافظة على التربة ومنع انجرافها بسبب الرياح. ما اسم هذه الطريقة؟",
                "correct": 19778,
                "total": 27700,
                "percentage": 71.4
            },
            {
                "question": "في السلسلة الغذائية الموضحة في الشكل، ما الكائن الذي يُعدّ المستهلك الأول؟",
                "correct": 19672,
                "total": 27700,
                "percentage": 71.02
            },
            {
                "question": "Column8",
                "correct": 19186,
                "total": 27700,
                "percentage": 69.26
            },
            {
                "question": "ثلاث شجرات أطوالها أعداد صحيحة من الأمتار ، طول الشجرة الثانية يساوي نصف طول الشجرة الأولى، والشجرة الثالثة أطول من الثانية وأقصر من الأولى، إذا كان مجموع ارتفاعات الأشجار ٢٤ مترًا، فما طول الشجرة الث",
                "correct": 19029,
                "total": 27700,
                "percentage": 68.7
            },
            {
                "question": "الفكرة الرئيسة التي يدور حولها النص هي:",
                "correct": 18264,
                "total": 27700,
                "percentage": 65.94
            },
            {
                "question": "أيُّ العبارات التالية تساعدك على تحديد الخلية النباتية في الشكل؟",
                "correct": 17368,
                "total": 27700,
                "percentage": 62.7
            },
            {
                "question": "Column2",
                "correct": 17211,
                "total": 27700,
                "percentage": 62.13
            },
            {
                "question": "يُصنف النص السابق من حيث النوع بأنه نص:",
                "correct": 17177,
                "total": 27700,
                "percentage": 62.01
            },
            {
                "question": "Column1",
                "correct": 16447,
                "total": 27700,
                "percentage": 59.38
            },
            {
                "question": "Column3",
                "correct": 14647,
                "total": 27700,
                "percentage": 52.88
            },
            {
                "question": "Column",
                "correct": 12961,
                "total": 27700,
                "percentage": 46.79
            },
            {
                "question": "Column7",
                "correct": 12260,
                "total": 27700,
                "percentage": 44.26
            },
            {
                "question": "Column4",
                "correct": 11326,
                "total": 27700,
                "percentage": 40.89
            },
            {
                "question": "Column5",
                "correct": 9162,
                "total": 27700,
                "percentage": 33.08
            }
        ]
    },
    "grade9": {
        "gender": {
            "بنات": 17404,
            "بنين": 8724
        },
        "total_students": 26128,
        "sectors": {
            "الجبيل": 1827,
            "النعيرية": 436,
            "حفر الباطن": 5666,
            "الدمام": 7405,
            "القطيف": 5449,
            "العديد": 98,
            "الخبر": 3624,
            "القرية العليا": 161,
            "الخفجي": 785,
            "رأس تنورة": 251,
            "بقيق": 426
        },
        "sector_by_gender": {
            "بنات": {
                "الجبيل": 1304,
                "النعيرية": 363,
                "حفر الباطن": 3716,
                "الدمام": 4812,
                "القطيف": 3480,
                "العديد": 93,
                "الخبر": 2343,
                "القرية العليا": 136,
                "الخفجي": 624,
                "رأس تنورة": 160,
                "بقيق": 373
            },
            "بنين": {
                "النعيرية": 73,
                "حفر الباطن": 1950,
                "الجبيل": 523,
                "الدمام": 2593,
                "القطيف": 1969,
                "القرية العليا": 25,
                "الخبر": 1281,
                "الخفجي": 161,
                "رأس تنورة": 91,
                "بقيق": 53,
                "العديد": 5
            }
        },
        "questions": [
            {
                "question": "في جملة (وقد سهل هذا التحوّل على رواد المكتبات) معنى كلمة (التحوّل):",
                "correct": 23451,
                "total": 26128,
                "percentage": 89.75
            },
            {
                "question": "تستخدم عادة اسم المؤلف، كلمة (المؤلف) في العبارة السابقة:",
                "correct": 23203,
                "total": 26128,
                "percentage": 88.81
            },
            {
                "question": "معنى كلمة (النكوص) الواردة في النص:",
                "correct": 21146,
                "total": 26128,
                "percentage": 80.93
            },
            {
                "question": "الشكل المجاور عندما تصطف الكروموسومات المتضاعفة في منتصف الخلية فهذا يمثل الطور:",
                "correct": 21087,
                "total": 26128,
                "percentage": 80.71
            },
            {
                "question": "في عبارة: \"كانت البطاقات بداخل الفهارس\"، كلمة (كانت) تُعدّ من (كان وأخواتها).",
                "correct": 20970,
                "total": 26128,
                "percentage": 80.26
            },
            {
                "question": "سبعينات القرن العشرين الميلادي تعني الفترة بين:",
                "correct": 20865,
                "total": 26128,
                "percentage": 79.86
            },
            {
                "question": "فكرة ضخ الماء باستخدام المضخة (الدينمو) من خزان أرضي إلى خزان علوي تشبه فكرة لأحد الأنشطة الموجودة في الجسم وهي:",
                "correct": 20667,
                "total": 26128,
                "percentage": 79.1
            },
            {
                "question": "تشكلت الأحفورة التالية في الصخر لأنه صخر:",
                "correct": 20534,
                "total": 26128,
                "percentage": 78.59
            },
            {
                "question": "عند حدود الصفائح الجانبية تتكون:",
                "correct": 20071,
                "total": 26128,
                "percentage": 76.82
            },
            {
                "question": "صرف خالد ٥٧٠ ريال اثناء تسوقه وهي تعادل ٣٠% من مدخراته .فكم كان اجمالي مدخراته ؟",
                "correct": 19809,
                "total": 26128,
                "percentage": 75.82
            },
            {
                "question": "يتميز الحيوان الموجود في الصورة (العقرب) بأنه:",
                "correct": 19075,
                "total": 26128,
                "percentage": 73.01
            },
            {
                "question": "حسب الشكل التالي، ما الذي يحدث للحبل؟",
                "correct": 18872,
                "total": 26128,
                "percentage": 72.23
            },
            {
                "question": "الخلية التالية موجودة في جميع أنسجة الجسم ما عدا:",
                "correct": 18698,
                "total": 26128,
                "percentage": 71.56
            },
            {
                "question": "Column1",
                "correct": 18431,
                "total": 26128,
                "percentage": 70.54
            },
            {
                "question": "كانت ........ قديماً تعتمد على الفهارس التقليدية في البحث. الكلمة الصحيحة التي تكمل الفراغ في السابق هي:",
                "correct": 18207,
                "total": 26128,
                "percentage": 69.68
            },
            {
                "question": "ما المقصود بـ (مصادر المعلومات) الواردة في النص؟",
                "correct": 17903,
                "total": 26128,
                "percentage": 68.52
            },
            {
                "question": "جميع مجموعات الجدول الدوري تندرج تحت مسمى (العناصر الممثلة) ما عدا المجموعات:",
                "correct": 17610,
                "total": 26128,
                "percentage": 67.4
            },
            {
                "question": "في عبارة (بل وجب عليها مسايرة الحاضر) الضمير في كلمة (عليها) يعود على:",
                "correct": 17158,
                "total": 26128,
                "percentage": 65.67
            },
            {
                "question": "Column6",
                "correct": 16995,
                "total": 26128,
                "percentage": 65.05
            },
            {
                "question": "Column4",
                "correct": 16414,
                "total": 26128,
                "percentage": 62.82
            },
            {
                "question": "Column7",
                "correct": 16094,
                "total": 26128,
                "percentage": 61.6
            },
            {
                "question": "Column5",
                "correct": 14954,
                "total": 26128,
                "percentage": 57.23
            },
            {
                "question": "أي الأدراج له طاقة وضع أقل:",
                "correct": 13734,
                "total": 26128,
                "percentage": 52.56
            },
            {
                "question": "Column8",
                "correct": 13275,
                "total": 26128,
                "percentage": 50.81
            },
            {
                "question": "Column3",
                "correct": 13181,
                "total": 26128,
                "percentage": 50.45
            },
            {
                "question": "في الموجة الصوتية الموضحة في الشكل أي مما يلي يمثل النقطتين (1) و (2) على الترتيب:",
                "correct": 12127,
                "total": 26128,
                "percentage": 46.41
            },
            {
                "question": "العلاقة بين مصطلحي (البحث المباشر، والبحث الآلي) علاقة:",
                "correct": 11059,
                "total": 26128,
                "percentage": 42.33
            },
            {
                "question": "Column2",
                "correct": 10643,
                "total": 26128,
                "percentage": 40.73
            },
            {
                "question": "كتبت كلمة (المكتبات) بالتاء المفتوحة لأنها:",
                "correct": 10297,
                "total": 26128,
                "percentage": 39.41
            },
            {
                "question": "Column",
                "correct": 4518,
                "total": 26128,
                "percentage": 17.29
            }
        ]
    }
};

  const COLORS = ['#498AA8', '#2F6581', '#ABBDC6', '#545355', '#19171D'];
  const UI = {
    page: '#F3F8FA',
    primary: '#498AA8',
    primaryDeep: '#2F6581',
    muted: '#ABBDC6',
    ink: '#19171D',
    inkSoft: '#545355',
    card: '#FFFFFF',
    border: 'rgba(43,71,83,0.12)'
  };

  const genderData = Object.entries(currentData.gender).map(([name, value]) => ({
    name,
    value,
    percentage: ((value / currentData.total_students) * 100).toFixed(1)
  }));

  const sectorData = Object.entries(currentData.sectors)
    .sort((a, b) => b[1] - a[1])
    .map(([name, value]) => ({
      name,
      value,
      percentage: ((value / currentData.total_students) * 100).toFixed(1)
    }));

  const sectorGenderData = Object.entries(currentData.sectors)
    .sort((a, b) => b[1] - a[1])
    .map(([sector]) => {
      const result = { sector };
      Object.keys(currentData.sector_by_gender).forEach(gender => {
        result[gender] = currentData.sector_by_gender[gender][sector] || 0;
      });
      return result;
    });

  const topQuestions = currentData.questions.slice(0, 10);
  const bottomQuestions = currentData.questions.slice(-10).reverse();

  return (
    <div style={{
      minHeight: '100vh',
      background: UI.page,
      fontFamily: "'Cairo', 'Tajawal', sans-serif",
      direction: 'rtl',
      padding: '2.5rem',
      color: UI.ink
    }}>
      <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;900&family=Tajawal:wght@400;500;700&display=swap" rel="stylesheet" />

      {/* Header */}
      <div style={{
        background: UI.card,
        borderRadius: '28px',
        padding: '2.8rem',
        marginBottom: '2rem',
        border: `1px solid ${UI.border}`,
        boxShadow: '0 20px 50px rgba(25,23,29,0.08)'
      }}>
        <h1 style={{
          fontSize: '3.2rem',
          fontWeight: '900',
          margin: 0,
          color: UI.primaryDeep,
          textAlign: 'center',
          letterSpacing: '0.5px'
        }}>
          لوحة إحصائيات الاختبارات التشخيصي (التحصيلي)
        </h1>
        <p style={{
          textAlign: 'center',
          fontSize: '1.2rem',
          margin: '1rem 0 0 0',
          color: UI.inkSoft,
          fontWeight: '500'
        }}>
          تحليل مبسّط ودقيق لأداء الطلاب والطالبات
        </p>
      </div>

      {/* Grade Selector */}
      <div style={{
        display: 'flex',
        gap: '1.5rem',
        marginBottom: '2rem',
        justifyContent: 'center'
      }}>
        <button
          onClick={() => setActiveGrade('grade3')}
          style={{
            padding: '1.2rem 3rem',
            fontSize: '1.4rem',
            fontWeight: '700',
            border: `1px solid ${UI.border}`,
            borderRadius: '18px',
            cursor: 'pointer',
            background: activeGrade === 'grade3'
              ? UI.primary
              : UI.card,
            color: activeGrade === 'grade3' ? '#fff' : UI.primaryDeep,
            transition: 'all 0.3s ease',
            fontFamily: 'inherit',
            boxShadow: activeGrade === 'grade3' ? '0 12px 24px rgba(73,138,168,0.25)' : 'none',
            transform: activeGrade === 'grade3' ? 'scale(1.05)' : 'scale(1)'
          }}>
          الصف الثالث الابتدائي
        </button>
        <button
          onClick={() => setActiveGrade('grade6')}
          style={{
            padding: '1.2rem 3rem',
            fontSize: '1.4rem',
            fontWeight: '700',
            border: `1px solid ${UI.border}`,
            borderRadius: '18px',
            cursor: 'pointer',
            background: activeGrade === 'grade6'
              ? UI.primary
              : UI.card,
            color: activeGrade === 'grade6' ? '#fff' : UI.primaryDeep,
            transition: 'all 0.3s ease',
            fontFamily: 'inherit',
            boxShadow: activeGrade === 'grade6' ? '0 12px 24px rgba(73,138,168,0.25)' : 'none',
            transform: activeGrade === 'grade6' ? 'scale(1.05)' : 'scale(1)'
          }}>
          الصف السادس الابتدائي
        </button>

        <button
          onClick={() => setActiveGrade('grade9')}
          style={{
            padding: '1.2rem 3rem',
            fontSize: '1.4rem',
            fontWeight: '700',
            border: `1px solid ${UI.border}`,
            borderRadius: '18px',
            cursor: 'pointer',
            background: activeGrade === 'grade9'
              ? UI.primary
              : UI.card,
            color: activeGrade === 'grade9' ? '#fff' : UI.primaryDeep,
            transition: 'all 0.3s ease',
            fontFamily: 'inherit',
            boxShadow: activeGrade === 'grade9' ? '0 12px 24px rgba(73,138,168,0.25)' : 'none',
            transform: activeGrade === 'grade9' ? 'scale(1.05)' : 'scale(1)'
          }}>
          الصف الثالث متوسط
        </button>
      </div>

      {/* Summary Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '1.5rem',
        marginBottom: '2rem'
      }}>
        <div style={{
          background: UI.card,
          borderRadius: '22px',
          padding: '2rem',
          boxShadow: '0 12px 30px rgba(25,23,29,0.08)',
          border: `1px solid ${UI.border}`
        }}>
          <div style={{ fontSize: '1.05rem', color: UI.inkSoft, marginBottom: '0.5rem', fontWeight: '600' }}>إجمالي المشاركين</div>
          <div style={{ fontSize: '3.4rem', fontWeight: '900', color: UI.primaryDeep }}>{currentData.total_students}</div>
          <div style={{ fontSize: '0.95rem', color: UI.inkSoft, marginTop: '0.5rem' }}>طالب وطالبة</div>
        </div>

        {Object.entries(currentData.gender).map(([gender, count], index) => (
          <div key={gender} style={{
            background: UI.card,
            borderRadius: '22px',
            padding: '2rem',
            boxShadow: '0 12px 30px rgba(25,23,29,0.08)',
            border: `1px solid ${UI.border}`
          }}>
            <div style={{ fontSize: '1.05rem', color: UI.inkSoft, marginBottom: '0.5rem', fontWeight: '600' }}>
              {gender}
            </div>
            <div style={{ fontSize: '3rem', fontWeight: '900', color: COLORS[index % COLORS.length] }}>{count}</div>
            <div style={{ fontSize: '0.95rem', color: UI.inkSoft, marginTop: '0.5rem' }}>
              {((count / currentData.total_students) * 100).toFixed(1)}% من الإجمالي
            </div>
          </div>
        ))}
      </div>

      {/* Charts Row 1: Gender and Sectors */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
        gap: '2rem',
        marginBottom: '2rem'
      }}>
        <div style={{
          background: UI.card,
          borderRadius: '24px',
          padding: '2rem',
          border: `1px solid ${UI.border}`,
          boxShadow: '0 18px 40px rgba(25,23,29,0.08)'
        }}>
          <h2 style={{ fontSize: '1.7rem', fontWeight: '700', marginBottom: '1.5rem', color: UI.primaryDeep }}>
            توزيع المشاركين حسب النوع
          </h2>
          <ResponsiveContainer width="100%" height={350}>
            <PieChart>
              <Pie
                data={genderData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={(entry) => `${entry.name}: ${entry.percentage}%`}
                outerRadius={120}
                fill="#8884d8"
                dataKey="value"
              >
                {genderData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  background: '#fff',
                  border: `1px solid ${UI.border}`,
                  borderRadius: '12px',
                  fontFamily: 'inherit',
                  color: UI.ink
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div style={{
          background: UI.card,
          borderRadius: '24px',
          padding: '2rem',
          border: `1px solid ${UI.border}`,
          boxShadow: '0 18px 40px rgba(25,23,29,0.08)'
        }}>
          <h2 style={{ fontSize: '1.7rem', fontWeight: '700', marginBottom: '1.5rem', color: UI.primaryDeep }}>
            توزيع المشاركين حسب القطاع
          </h2>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={sectorData.slice(0, 8)}>
              <CartesianGrid strokeDasharray="3 3" stroke={UI.border} />
              <XAxis
                dataKey="name"
                tick={{ fill: UI.inkSoft, fontSize: 12 }}
                angle={-15}
                textAnchor="end"
                height={80}
              />
              <YAxis tick={{ fill: UI.inkSoft }} />
              <Tooltip
                contentStyle={{
                  background: '#fff',
                  border: `1px solid ${UI.border}`,
                  borderRadius: '12px',
                  fontFamily: 'inherit',
                  color: UI.ink
                }}
                formatter={(value) => [`${value} (${((value / currentData.total_students) * 100).toFixed(1)}%)`, 'عدد الطلاب']}
              />
              <Bar dataKey="value" fill={UI.primary} radius={[10, 10, 0, 0]}>
                {sectorData.slice(0, 8).map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Sector by Gender Comparison */}
      <div style={{
        background: UI.card,
        borderRadius: '24px',
        padding: '2rem',
        marginBottom: '2rem',
        border: `1px solid ${UI.border}`,
        boxShadow: '0 18px 40px rgba(25,23,29,0.08)'
      }}>
        <h2 style={{ fontSize: '1.7rem', fontWeight: '700', marginBottom: '1.5rem', color: UI.primaryDeep }}>
          مقارنة المشاركين والمشاركات في كل قطاع
        </h2>
        <ResponsiveContainer width="100%" height={450}>
          <BarChart data={sectorGenderData.slice(0, 8)}>
            <CartesianGrid strokeDasharray="3 3" stroke={UI.border} />
            <XAxis
              dataKey="sector"
              tick={{ fill: UI.inkSoft, fontSize: 12 }}
              angle={-15}
              textAnchor="end"
              height={80}
            />
            <YAxis tick={{ fill: UI.inkSoft }} />
            <Tooltip
              contentStyle={{
                background: '#fff',
                border: `1px solid ${UI.border}`,
                borderRadius: '12px',
                fontFamily: 'inherit',
                color: UI.ink
              }}
            />
            <Legend
              wrapperStyle={{ color: UI.inkSoft }}
              iconType="circle"
            />
            {Object.keys(currentData.sector_by_gender).map((gender, index) => (
              <Bar
                key={gender}
                dataKey={gender}
                fill={COLORS[index % COLORS.length]}
                radius={[10, 10, 0, 0]}
              />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Questions Analysis */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
        gap: '2rem',
        marginBottom: '2rem'
      }}>
        {/* Top Questions */}
        <div style={{
          background: UI.card,
          borderRadius: '24px',
          padding: '2rem',
          border: `1px solid ${UI.border}`,
          boxShadow: '0 18px 40px rgba(25,23,29,0.08)'
        }}>
          <h2 style={{ fontSize: '1.7rem', fontWeight: '700', marginBottom: '1.5rem', color: UI.primaryDeep }}>
            الأسئلة الأعلى أداءً
          </h2>
          <div style={{ maxHeight: '600px', overflowY: 'auto' }}>
            {topQuestions.map((q, index) => (
              <div key={index} style={{
                background: '#F7FAFC',
                borderRadius: '16px',
                padding: '1.5rem',
                marginBottom: '1rem',
                border: `1px solid ${UI.border}`,
                transition: 'all 0.3s ease'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: '0.8rem'
                }}>
                  <span style={{
                    background: UI.primary,
                    color: '#fff',
                    padding: '0.5rem 1rem',
                    borderRadius: '12px',
                    fontWeight: '900',
                    fontSize: '1.2rem',
                    minWidth: '50px',
                    textAlign: 'center'
                  }}>
                    #{index + 1}
                  </span>
                  <span style={{
                    background: 'rgba(73,138,168,0.15)',
                    color: UI.primaryDeep,
                    padding: '0.4rem 1.2rem',
                    borderRadius: '20px',
                    fontWeight: '700',
                    fontSize: '1.1rem'
                  }}>
                    {q.percentage}%
                  </span>
                </div>
                <div style={{
                  fontSize: '1.05rem',
                  color: UI.ink,
                  lineHeight: '1.6',
                  marginBottom: '0.8rem'
                }}>
                  {q.question}
                </div>
                <div style={{
                  display: 'flex',
                  gap: '1rem',
                  fontSize: '0.95rem',
                  color: UI.inkSoft
                }}>
                  <span>✓ إجابات صحيحة: {q.correct}</span>
                  <span>• إجمالي: {q.total}</span>
                </div>
                <div style={{
                  marginTop: '0.8rem',
                  background: 'rgba(171,189,198,0.35)',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  height: '8px'
                }}>
                  <div style={{
                    width: `${q.percentage}%`,
                    height: '100%',
                    background: `linear-gradient(90deg, ${UI.primary} 0%, ${UI.primaryDeep} 100%)`,
                    transition: 'width 0.5s ease'
                  }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Questions */}
        <div style={{
          background: UI.card,
          borderRadius: '24px',
          padding: '2rem',
          border: `1px solid ${UI.border}`,
          boxShadow: '0 18px 40px rgba(25,23,29,0.08)'
        }}>
          <h2 style={{ fontSize: '1.7rem', fontWeight: '700', marginBottom: '1.5rem', color: UI.ink }}>
            الأسئلة الأقل أداءً
          </h2>
          <div style={{ maxHeight: '600px', overflowY: 'auto' }}>
            {bottomQuestions.map((q, index) => (
              <div key={index} style={{
                background: '#F8F5F6',
                borderRadius: '16px',
                padding: '1.5rem',
                marginBottom: '1rem',
                border: `1px solid ${UI.border}`,
                transition: 'all 0.3s ease'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: '0.8rem'
                }}>
                  <span style={{
                    background: UI.inkSoft,
                    color: '#fff',
                    padding: '0.5rem 1rem',
                    borderRadius: '12px',
                    fontWeight: '900',
                    fontSize: '1.2rem',
                    minWidth: '50px',
                    textAlign: 'center'
                  }}>
                    #{index + 1}
                  </span>
                  <span style={{
                    background: 'rgba(84,83,85,0.15)',
                    color: UI.inkSoft,
                    padding: '0.4rem 1.2rem',
                    borderRadius: '20px',
                    fontWeight: '700',
                    fontSize: '1.1rem'
                  }}>
                    {q.percentage}%
                  </span>
                </div>
                <div style={{
                  fontSize: '1.05rem',
                  color: UI.ink,
                  lineHeight: '1.6',
                  marginBottom: '0.8rem'
                }}>
                  {q.question}
                </div>
                <div style={{
                  display: 'flex',
                  gap: '1rem',
                  fontSize: '0.95rem',
                  color: UI.inkSoft
                }}>
                  <span>✓ إجابات صحيحة: {q.correct}</span>
                  <span>• إجمالي: {q.total}</span>
                </div>
                <div style={{
                  marginTop: '0.8rem',
                  background: 'rgba(171,189,198,0.35)',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  height: '8px'
                }}>
                  <div style={{
                    width: `${q.percentage}%`,
                    height: '100%',
                    background: `linear-gradient(90deg, ${UI.inkSoft} 0%, ${UI.ink} 100%)`,
                    transition: 'width 0.5s ease'
                  }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{
        background: UI.card,
        borderRadius: '24px',
        padding: '1.5rem',
        textAlign: 'center',
        border: `1px solid ${UI.border}`,
        marginTop: '2rem',
        boxShadow: '0 12px 30px rgba(25,23,29,0.08)'
      }}>
        <p style={{ margin: 0, color: UI.inkSoft, fontSize: '1.1rem' }}>
          تم إنشاء هذه اللوحة بناءً على البيانات الفعلية من الملفات المرفقة • جميع الإحصائيات دقيقة ومحدثة
        </p>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Dashboard />);
