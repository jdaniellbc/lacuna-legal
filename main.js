(function ($) {
    $(function () {
        var skills = ["Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, ", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam", "At vero eos et accusamus et iusto odio dignissimos", "text4"],
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
        }, 2000);
    });
})(jQuery);