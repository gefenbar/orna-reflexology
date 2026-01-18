const fs = require('fs');
const path = require('path');

// Meta tag configuration for each route
const META_TAGS = {
    '/': {
        title: 'עמוד הבית | הרגליים - ארנה קליין | רפלקסולוגיה ודמיון מודרך',
        description: 'הרגליים - ארנה קליין, מטפלת מוסמכת ברפלקסולוגיה ודמיון מודרך. בוגרת מכללת רידמן. משלבת הקשבה לצורכי המטופלת והתאמת מענה טיפולי מדויק. הקליניקה ממוקמת בכפר תבור.',
        canonical: 'https://hergelaim.co.il/'
    },
    '/about-me': {
        title: 'עליי | הרגליים - ארנה קליין',
        description: 'ארנה קליין - מטפלת מוסמכת ברפלקסולוגיה ודמיון מודרך, בוגרת מכללת רידמן. למדו עוד על הגישה הטיפולית שלי ועל הדרך בה אני משלבת הקשבה והתאמה אישית.',
        canonical: 'https://hergelaim.co.il/about-me'
    },
    '/contact': {
        title: 'צור קשר | הרגליים - ארנה קליין',
        description: 'צרו קשר עם ארנה קליין לתיאום טיפול רפלקסולוגי או דמיון מודרך. הקליניקה ממוקמת בכפר תבור. טלפון: 054-9794-777',
        canonical: 'https://hergelaim.co.il/contact'
    },
    '/testimonials': {
        title: 'המלצות | הרגליים - ארנה קליין',
        description: 'קראו המלצות ממטופלות על טיפולי רפלקסולוגיה ודמיון מודרך עם ארנה קליין. חוויות אמיתיות של שיפור בריאותי ורגשי.',
        canonical: 'https://hergelaim.co.il/testimonials'
    },
    '/about-legs': {
        title: 'על הרגל | הרגליים - ארנה קליין',
        description: 'למדו על סודות הרפלקסולוגיה, טיפול עתיק יומין המשתמש בלחיצות ממוקדות על כפות הרגליים כדי להקל על כאבים, לשפר את הבריאות הכללית ולעודד איזון גוף ונפש.',
        canonical: 'https://hergelaim.co.il/about-legs'
    },
    '/anxiety-relief': {
        title: 'רפלקסולוגיה לטיפול בחרדה | הרגליים',
        description: 'גלו איך רפלקסולוגיה יכולה לסייע בהפחתת חרדה, להרגיע את מערכת העצבים ולהחזיר שליטה. טיפול טבעי ויעיל לחרדה ומתח.',
        canonical: 'https://hergelaim.co.il/anxiety-relief'
    },
    '/migraines': {
        title: 'רפלקסולוגיה למיגרנות | הרגליים',
        description: 'רפלקסולוגיה למיגרנות - איך לשבור את מעגל הכאב הבלתי נסבל. טיפול טבעי להקלה על כאבי ראש ומיגרנות כרוניות.',
        canonical: 'https://hergelaim.co.il/migraines'
    },
    '/heel-spur': {
        title: 'רפלקסולוגיה לדורבן | הרגליים',
        description: 'רפלקסולוגיה לדורבן (Plantar Fasciitis) - הקלה טבעית וטיפול בשורש הכאב. גישה הוליסטית לטיפול בכאבי עקב.',
        canonical: 'https://hergelaim.co.il/heel-spur'
    },
    '/hormonal-balance': {
        title: 'איזון הורמונלי | הרגליים',
        description: 'רפלקסולוגיה ואיזון הורמונלי - גישה טבעית לטיפול ב-PMS, גיל המעבר ובעיות פוריות. שיפור האיזון ההורמונלי באופן טבעי.',
        canonical: 'https://hergelaim.co.il/hormonal-balance'
    },
    '/sleep-improvement': {
        title: 'שינה טובה | הרגליים',
        description: 'רפלקסולוגיה לשינה טובה - הפתרון הטבעי ללילות רגועים ושינה עמוקה. טיפול בהפרעות שינה ללא תרופות.',
        canonical: 'https://hergelaim.co.il/sleep-improvement'
    },
    '/reflexology-map': {
        title: 'מפה רפלקסולוגית | הרגליים',
        description: 'הסבר מפורט על כל האזורים במפה רפלקסולוגית של הרגל. למדו על הקשר בין נקודות בכף הרגל לאיברי הגוף.',
        canonical: 'https://hergelaim.co.il/reflexology-map'
    },
    '/foot-back': {
        title: 'רפלקסולוגיה לגב כף הרגל | הרגליים',
        description: 'רפלקסולוגיה לגב כף הרגל - גישה טבעית להקלה ושיפור תפקוד כף הרגל. טיפול בכאבים ובעיות בכף הרגל.',
        canonical: 'https://hergelaim.co.il/foot-back'
    },
    '/stress': {
        title: 'רפלקסולוגיה והפחתת לחץ | הרגליים',
        description: 'איך רפלקסולוגיה יכולה להפחית לחצים ומתח. טיפול טבעי להרגעה, הפחתת סטרס ושיפור איכות החיים.',
        canonical: 'https://hergelaim.co.il/stress'
    },
    '/reflexology': {
        title: 'רפלקסולוגיה: טיפול מותאם אישית | הרגליים',
        description: 'מה זה רפלקסולוגיה - טיפול מותאם אישית בידיים שלך. הבנת העקרונות והיתרונות של הטיפול הרפלקסולוגי.',
        canonical: 'https://hergelaim.co.il/reflexology'
    },
    '/lower-back': {
        title: 'רפלקסולוגיה לגב תחתון | הרגליים',
        description: 'המדריך השלם להקלה טבעית על כאבי גב תחתון באמצעות רפלקסולוגיה. טיפול יעיל וללא תרופות.',
        canonical: 'https://hergelaim.co.il/lower-back'
    },
    '/reflection': {
        title: 'רפלקסולוגיה והשתקפויות | הרגליים',
        description: 'איך כף הרגל משקפת את גופך? הבנת העקרון של השתקפות איברים בכף הרגל ברפלקסולוגיה.',
        canonical: 'https://hergelaim.co.il/reflection'
    },
    '/back-pain': {
        title: 'רפלקסולוגיה וכאבי גב | הרגליים',
        description: 'פתרונות טבעיים לשיפור איכות החיים בעזרת רפלקסולוגיה. טיפול בכאבי גב כרוניים ואקוטיים.',
        canonical: 'https://hergelaim.co.il/back-pain'
    },
    '/alternative': {
        title: 'טיפול אלטרנטיבי | הרגליים',
        description: 'ההיסטוריה של רפואה אלטרנטיבית ובפרט של רפלקסולוגיה. הבנת השורשים והפיתוח של הטיפול.',
        canonical: 'https://hergelaim.co.il/alternative'
    },
    '/balance': {
        title: 'איזון ורפלקסולוגיה | הרגליים',
        description: 'על הקשר בין איזון לרפלקסולוגיה. כיצד הטיפול מסייע להשגת איזון גופני ונפשי.',
        canonical: 'https://hergelaim.co.il/balance'
    },
    '/headache': {
        title: 'כאבי ראש | הרגליים',
        description: 'רפלקסולוגיה וכאבי ראש - הקלה טבעית ושיפור איכות החיים. טיפול יעיל בכאבי ראש ומיגרנות.',
        canonical: 'https://hergelaim.co.il/headache'
    }
};

function injectMetaTags(htmlPath, route) {
    const meta = META_TAGS[route];
    if (!meta) {
        console.log(`⚠️  No meta tags defined for route: ${route}`);
        return;
    }

    let html = fs.readFileSync(htmlPath, 'utf8');

    // Replace title
    html = html.replace(
        /<title>.*?<\/title>/,
        `<title>${meta.title}</title>`
    );

    // Replace or add description meta tag
    // Handle both attribute orders: name first or content first
    if (html.includes('name="description"')) {
        // Try both patterns
        html = html.replace(
            /<meta name="description" content="[^"]*"[^>]*>/g,
            `<meta name="description" content="${meta.description}">`
        );
        html = html.replace(
            /<meta content="[^"]*" name="description"[^>]*>/g,
            `<meta content="${meta.description}" name="description">`
        );
    } else {
        html = html.replace(
            '</title>',
            `</title>\n  <meta name="description" content="${meta.description}">`
        );
    }

    // Replace or add canonical link
    if (html.includes('rel="canonical"')) {
        html = html.replace(
            /<link rel="canonical" href=".*?">/,
            `<link rel="canonical" href="${meta.canonical}">`
        );
    } else {
        html = html.replace(
            '</head>',
            `  <link rel="canonical" href="${meta.canonical}">\n</head>`
        );
    }

    // Update OG tags
    html = html.replace(
        /<meta property="og:title" content=".*?">/,
        `<meta property="og:title" content="${meta.title}">`
    );
    html = html.replace(
        /<meta property="og:description" content=".*?">/,
        `<meta property="og:description" content="${meta.description}">`
    );
    html = html.replace(
        /<meta property="og:url" content=".*?">/,
        `<meta property="og:url" content="${meta.canonical}">`
    );

    fs.writeFileSync(htmlPath, html, 'utf8');
    console.log(`✅ Injected meta tags for ${route}`);
}

function main() {
    console.log('\n🏷️  Injecting unique meta tags into pre-rendered HTML files...\n');

    const buildDir = path.join(__dirname, '..', 'build');

    // Process each route
    Object.keys(META_TAGS).forEach(route => {
        let htmlPath;

        if (route === '/') {
            htmlPath = path.join(buildDir, 'index.html');
        } else {
            htmlPath = path.join(buildDir, route.slice(1), 'index.html');
        }

        if (fs.existsSync(htmlPath)) {
            injectMetaTags(htmlPath, route);
        } else {
            console.log(`⚠️  HTML file not found: ${htmlPath}`);
        }
    });

    console.log('\n✨ Meta tag injection complete!\n');
}

main();
