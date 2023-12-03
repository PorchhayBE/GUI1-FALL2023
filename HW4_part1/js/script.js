// // File: script.js
// // GUI Assignment: Multiplication Table
// // Porchhay Be, UMass Lowell Computer Science,
// // porchhay_be@student.uml.edu
// // Copyright (c) 2021 by Porchhay. All rights reserved. May be freely copied or
// // excerpted for educational purposes with credit to the author.
// // updated by Porchhay on November, 10 at 9:00 AM

$(document).ready(function () {
  debug: true,
    $("#multiplicationForm").validate({
      // rule for the form
      rules: {
        startHorizontal: {
          required: true,
          number: true,
          range: [-50, 50],
        },
        endHorizontal: {
          required: true,
          number: true,
          range: [-50, 50],
        },
        startVertical: {
          required: true,
          number: true,
          range: [-50, 50],
        },
        endVertical: {
          required: true,
          number: true,
          range: [-50, 50],
        },
      },

      // custom messages for the form
      messages: {
        startHorizontal: {
          required: "Please enter a value for the start row",
          range: "Please enter a value between -50 and 50",
        },
        endHorizontal: {
          required: "Please enter a value for the end row",
          range: "Please enter a value between -50 and 50",
        },
        startVertical: {
          required: "Please enter a value for the start column",
          range: "Please enter a value between -50 and 50",
        },
        endVertical: {
          required: "Please enter a value for the end column",
          range: "Please enter a value between -50 and 50",
        },
      },
      // submit call generate table function with input values
      submitHandler: function (form) {
        const startVerticalInt = parseInt($("#startVertical").val())
        const endVerticalInt = parseInt($("#endVertical").val())
        const startHorizontalInt = parseInt($("#startHorizontal").val())
        const endHorizontalInt = parseInt($("#endHorizontal").val())

        generateTable(
          startVerticalInt,
          endVerticalInt,
          startHorizontalInt,
          endHorizontalInt
        )
        return false // Prevent the form from submitting
      },
    })
})

function generateTable(
  startVerticalInt,
  endVerticalInt,
  startHorizontalInt,
  endHorizontalInt
) {
  // Clear previous table
  const table = $("#multiplicationTable")
  table.empty()

  // Generate table
  for (let i = startVerticalInt - 1; i <= endVerticalInt; i++) {
    const row = $("<tr></tr>")
    for (let j = startHorizontalInt - 1; j <= endHorizontalInt; j++) {
      const cell = $("<td></td>")

      if (i === startVerticalInt - 1 && j === startHorizontalInt - 1) {
        cell.addClass("blank_header")
      } else if (i === startVerticalInt - 1) {
        cell.html(`<strong>${j}</strong>`).addClass("row_header")
      } else if (j === startHorizontalInt - 1) {
        cell.html(`<strong>${i}</strong>`).addClass("column_header")
      } else {
        cell.text(i * j)
      }

      row.append(cell)
    }

    table.append(row)
  }
}
