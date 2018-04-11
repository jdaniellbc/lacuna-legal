(function ($) {
    $(function () {
        var skills = ["Lacuna Legal addresses the diverse needs of law firms in southern California. Great achievement periodically requires some outside expertise and Lacuna is designed to fill the gap with deep experience, careful attention to detail and commitment to the success of your project.", 
        "Lacuna principal April Szabo has a well - earned reputation for drafting powerful, creative briefs for some of California’s most accomplished legal professionals. From her time as research attorney to LA Superior Court’s most prestigious judges and as an associate at Loeb & Loeb, LLP, April has developed a unique, effective writing style that incorporates her knowledge of judicial decision - making and high - stakes litigation. April researches and drafts a variety of documents for firms in southern California and welcomes the opportunity to discuss how her work can contribute to your firm’s success.", 
            "With 17 years of employer defense to our name, Lacuna Legal provides businesses with a detailed, thorough approach to workplace compliance and litigation."],
            counter = skills.length - 1,
            previousSkill = $("#myGreetingSkills"),
            arraylength = skills.length - 1;

        function display_skills() {
            if (counter === arraylength) {
                counter = 0;
            }
            else {
                counter++;
            }
            previousSkill.html(skills[counter]);
        }

        display_skills();

        setInterval(function () {
            display_skills();
        }, 6000);
    });
})(jQuery);