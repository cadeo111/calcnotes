/**
 * Created by CadenKeese on 9/27/16.
 */


$(function () {


    function  first() {


        var i, j;
        var tabID;
        var iterateFrom;
        var iterateTo;
        var main = [["2.1", "Limits Continuity"],
            ["2.2", "Limits Involving Infinity"],
            ["2.3", "Continuity"],
            ["2.4", "Slope, Derivative And Tangent To A Curve"],
            ["2.5", "Finding The Derivative (Slope Function)"],
            ["3.3", "Differentiation Rules"],
            ["3.2", "Differentiability"],
            ["3.4", "Velocity, Speed And Other Rates Of Change"],
            ["3.5", "Derivatives Of Trig Functions"],
            ["3.6", "Chain Rule"],
            ["3.7", "Implicit Derivative"],
            ["3.8", "Inverse Trig Derivatives"],
            ["3.9", "Natural Logarithms"],
            ["4.0", "Derivatives Of Exponentials"],
            ["4.1", "Extrema And The Mean Value Theorem"],
            ["4.2", "Mean Value Theorem"],
            ["4.3", "Connecting F, F’, F”"],
            ["4.4", "Modeling, Optimization"],
            ["4.5", "Linear Approximations"],
            ["4.6", "Related Rates"],
            ["5.2", "Calculus And Area"],
            ["5.3", "Definite Integral Rules"],
            ["5.4", "Fundamental Theorem Of Calculus"],
            ["5.5", "Trapezoid Rule"],
            ["6.1", "Anti Derivatives"],
            ["6.2", "Integration By Substitution"],
            ["6.3", "Integration By Parts"],
            ["6.4", "Decay Equation"],
            ["6.5", "Population Growth"],
            ["6.6", "Euler’s Method"],
            ["7.1", "Integral As Net Change"],
            ["7.2", "Area Between Curves"],
            ["7.3", "Volumes Of Solids Of Revolution"],
            ["7.4", "Curve Length"],
            ["7.5", "Work"],
            ["8.1", "Indeterminate Forms And L’Hoptal’s Rule"],
            ["8.2", "The Rates At Which Functions Grow"],
            ["8.3", "Improper Integrals (Integrals Involving Infinity Or Undefined)"],
            ["8.4", "Partial Fractions"],
            ["9.1", "Series Notation"],
            ["9.2", "Taylor Series"],
            ["9.3", "Remainder Estimate Theorem"],
            ["9.4", "Radius Of Convergence"],
            ["10.1", "Parametric Functions"],
            ["10.2", "Vectors"],
            ["10.3", "Vector Valued Functions"],
            ["10.4", "Projectile Motion"],
            ["10.5", "Polar Coordinates"],
            ["10.6", "Area Computation In Polar Coordinates"]

        ];

        for (i = 2; i < 11; i++) {
            iterateFrom = 0;
            iterateTo = 0;
            tabID = '#' + String(i) + '_x';
            switch (i) {
                case 2:
                case 7:
                    //1-5
                    iterateFrom = 1;
                    iterateTo = 5;
                    break;
                case 3:
                    //2-9
                    iterateFrom = 2;
                    iterateTo = 9;

                    break;
                case 4:
                    //0-6
                    iterateFrom = 0;
                    iterateTo = 6;
                    break;
                case 5:
                    //2-5
                    iterateFrom = 2;
                    iterateTo = 5;
                    break;
                case 6:
                case 10:
                    //1-6
                    iterateFrom = 1;
                    iterateTo = 6;
                    break;
                case 9:
                case 8:
                    //1-4
                    iterateFrom = 1;
                    iterateTo = 4;
                    break;
            }
            for (j = iterateFrom; j < (iterateTo + 1); j++) {
                $('<li>')
                    .addClass("link_" + String(i) + String(j) + '_x')
                    .appendTo("#" + String(i) + "_x");
                $('<a>')
                    .text(i + "." + j)
                    //.addClass("btn btn-primary")
                    .attr({
                        "href": "#",
                        "type": "button",
                        "data-toggle": "modal",
                        "data-target": ".modal" + String(i) + String(j)
                    }).appendTo(".link_" + String(i) + String(j) + '_x');

                $('<div>')
                    .addClass("modal fade modal" + String(i) + String(j))
                    .attr({
                        "tabindex": "-1"
                    })
                    .appendTo('.maincont');

                $('<div>')
                    .addClass("modal-dialog modal-lg dialog" + String(i) + String(j))
                    .appendTo(".modal" + String(i) + String(j));

                $('<div>')
                    .addClass("modal-content content" + String(i) + String(j))
                    .appendTo(".dialog" + String(i) + String(j))
                    .html("<embed src=sections/" + String(i) + "." + String(j) + ".pdf></embed>");
            }


        }
    }
    function second(){
        var queries = [
            ["2.1", "Limits Continuity"],
            ["2.2", "Limits Involving Infinity"],
            ["2.3", "Continuity"],
            ["2.4", "Slope, Derivative And Tangent To A Curve"],
            ["2.5", "Finding The Derivative (Slope Function)"],
            ["3.3", "Differentiation Rules"],
            ["3.2", "Differentiability"],
            ["3.4", "Velocity, Speed And Other Rates Of Change"],
            ["3.5", "Derivatives Of Trig Functions"],
            ["3.6", "Chain Rule"],
            ["3.7", "Implicit Derivative"],
            ["3.8", "Inverse Trig Derivatives"],
            ["3.9", "Natural Logarithms"],
            ["4.0", "Derivatives Of Exponentials"],
            ["4.1", "Extrema And The Mean Value Theorem"],
            ["4.2", "Mean Value Theorem"],
            ["4.3", "Connecting F, F’, F”"],
            ["4.4", "Modeling, Optimization"],
            ["4.5", "Linear Approximations"],
            ["4.6", "Related Rates"],
            ["5.2", "Calculus And Area"],
            ["5.3", "Definite Integral Rules"],
            ["5.4", "Fundamental Theorem Of Calculus"],
            ["5.5", "Trapezoid Rule"],
            ["6.1", "Anti Derivatives"],
            ["6.2", "Integration By Substitution"],
            ["6.3", "Integration By Parts"],
            ["6.4", "Decay Equation"],
            ["6.5", "Population Growth"],
            ["6.6", "Euler’s Method"],
            ["7.1", "Integral As Net Change"],
            ["7.2", "Area Between Curves"],
            ["7.3", "Volumes Of Solids Of Revolution"],
            ["7.4", "Curve Length"],
            ["7.5", "Work"],
            ["8.1", "Indeterminate Forms And L’Hoptal’s Rule"],
            ["8.2", "The Rates At Which Functions Grow"],
            ["8.3", "Improper Integrals (Integrals Involving Infinity Or Undefined)"],
            ["8.4", "Partial Fractions"],
            ["9.1", "Series Notation"],
            ["9.2", "Taylor Series"],
            ["9.3", "Remainder Estimate Theorem"],
            ["9.4", "Radius Of Convergence"],
            ["10.1", "Parametric Functions"],
            ["10.2", "Vectors"],
            ["10.3", "Vector Valued Functions"],
            ["10.4", "Projectile Motion"],
            ["10.5", "Polar Coordinates"],
            ["10.6", "Area Computation In Polar Coordinates"]

        ];
        for (i = 0; i < queries.length; i++) {
           var string = queries[i][0].replace(".","");
            console.log(string);
            string = ".link_" + string + '_x a';
            console.log(string);
            console.log($(string).text());
            $(string).text($(string).text() + " " + queries[i][1]);


        }
    }
    first();
    second();

    /*$('<table>')
        .addClass('main table');

    for (i = 0; i < main.length; i++) {

        $



        main[i][0]
    }*/

});


