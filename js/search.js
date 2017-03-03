/**
 * Created by CadenKeese on 10/6/16.
 */
$(function() {


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
    function search(term) {
        term = term.toLowerCase();
        var tempid;
        var i;
        var found = [];
        var termExists = false;
        var continueSearch = true;
        if(term == ""){
            return "Please enter Something to search"
        }
        var results;
        while (continueSearch) {
            for (i = 0; i < queries.length; i++) {
                console.log(queries[i][1])
                if (queries[i][1].toLowerCase().search(term) != -1) {
                    found.push(queries[i][0]);
                    termExists = true;
                } else {
                    continueSearch = false;
                }
            }
        }
        if (termExists) {
            results = "Found in ";
            for (i = 0; i < (found.length); i++) {

                tempid = '.modal' + found[i].replace('.','');



                if(i > 0){
                    results += " and ";
                }
                results += "Chapter " + "<a data-dismiss=\"modal\" class=\"btn btn-info\" href=\"#\" type=\"button\" + data-toggle=\"modal\" data-target=\"" + tempid +  "\">" + found[i] + "</a>";

            }
        } else {
            results = "Nothing found";
        }
        return results;

    }

    $('<div>')
        .addClass("modal fade modalsearch")
        .attr({
            "tabindex": "-1"
        })
        .appendTo('body');

    $('<div>')
        .addClass("modal-dialog dialogsearch")
        .appendTo(".modalsearch");

    $('<div>')
        .addClass("modal-content contentsearch")
        .appendTo(".dialogsearch");
    $('<div>')
        .addClass("modal-body searchbody")
        .appendTo(".contentsearch");
    $('<button>')
        .attr({
        "type":"button",
        "class":"close",
        "data-dismiss":"modal"
    })
        .html("<span aria-hidden=\"true\">&times;</span>")
        .appendTo('.searchbody');
    $('<h4>')
        .attr({
        "id":"searchResultInput",
        "class":"modal-title"
        })
        .appendTo('.searchbody');




    $('.search').click(
        function () {

            $('#searchResultInput').html(search($('.searchText').val()));
            $('.modalsearch').modal('show');

        });
    $('.searchText').keydown(function(event){
        if(event.keyCode == 13){
            $('.search').click();
        }
    });
    $('.modalsearch').keydown(function(event) {
        if (event.keyCode == 13) {
            $('.modalsearch').modal('hide');
        }
    });
});


