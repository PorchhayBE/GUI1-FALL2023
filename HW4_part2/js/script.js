// // File: script.js
// // GUI Assignment: Multiplication Table
// // Porchhay Be, UMass Lowell Computer Science,
// // porchhay_be@student.uml.edu
// // Copyright (c) 2021 by Porchhay. All rights reserved. May be freely copied or
// // excerpted for educational purposes with credit to the author.
// // updated by Porchhay on November, 10 at 9:00 AM

$(document).ready(function () {
  // Initialize sliders
  initializeSlider("#sliderStartHorizontal", "#startHorizontal")
  initializeSlider("#sliderEndHorizontal", "#endHorizontal")
  initializeSlider("#sliderStartVertical", "#startVertical")
  initializeSlider("#sliderEndVertical", "#endVertical")

  // Initialize tabs
  $("#tabs").tabs()

  // Update slider when text input changes
  $("#startHorizontal, #endHorizontal, #startVertical, #endVertical").on(
    "input",
    function () {
      const sliderId =
        "#" +
        $(this)
          .attr("id")
          .replace("start", "sliderStart")
          .replace("end", "sliderEnd")
      $(sliderId).slider("value", $(this).val())
    }
  )

  // Add a button for deleting selected tabs
  $("#deleteSelectedTabs").on("click", function () {
    const selectedTabs = $("#tabs ul li input:checked")
    selectedTabs.each(function () {
      const tabId = $(this).closest("li").remove().attr("aria-controls")
      $("#" + tabId).remove()
    })
    $("#tabs").tabs("refresh")
    toggleDeleteButtons()
  })

  // Add a button for deleting all tabs
  $("#deleteAllTabs").on("click", function () {
    $("#tabs ul li").remove()
    $("#tabs div").remove()
    $("#tabs").tabs("refresh")
    toggleDeleteButtons()
  })

  // Jquery validation
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

    // enable validation as the user types
    onkeyup: function (element) {
      $(element).valid()
      // Call generateTable when any input field changes and the form is valid
      if ($("#multiplicationForm").valid()) {
        newTabs()
      }
    },

    // submit call generate table function with input values
    submitHandler: function (form) {
      newTabs()
      return false // Prevent the form from submitting
    },
  })

  // Call toggleDeleteButtons when tabs are refreshed
  $("#tabs").on("tabsactivate", function () {
    toggleDeleteButtons()
  })

  // Call toggleDeleteButtons initially
  toggleDeleteButtons()
})

// makeing new tab with multiplcation table
function newTabs() {
  // Get input values
  const startRow = parseInt($("#startHorizontal").val())
  const endRow = parseInt($("#endHorizontal").val())
  const startColumn = parseInt($("#startVertical").val())
  const endColumn = parseInt($("#endVertical").val())

  const tabId = `tab-${startColumn}-${endColumn}-${startRow}-${endRow}`
  const checkBoxId = `checkbox-${startColumn}-${endColumn}-${startRow}-${endRow}`

  // Check if the tab with the same ID already exists
  if ($("#tabs ul li a[href='#" + tabId + "']").length > 0) {
    // Tab already exists, no need to create a new one
    return
  }

  // generate table
  const generatedTables = generateTable(
    startRow,
    endRow,
    startColumn,
    endColumn
  )

  // Add a new tab with the generated table with checkbox
  $("#tabs ul").append(
    `<li><input type="checkbox" id="${checkBoxId}"/><a href="#${tabId}">[${startRow}/${endRow} , ${startColumn}/${endColumn}]</a></li>`
  )

  // add div to the tab
  $("#tabs").append(`<div id="${tabId}"></div>`)
  // add table to the tab
  $(`#${tabId}`).append(generatedTables)

  // Refresh tabs to include the new tab
  $("#tabs").tabs("refresh")

  // Determine the index of the newly added tab
  const tabIndex = $("#tabs ul li").length - 1

  // Show the newly added tab
  $("#tabs").tabs("option", "active", tabIndex)
}

// making multiplication table
function generateTable(startRow, endRow, startColumn, endColumn) {
  // Clear previous table
  const tableContainer = $("<div class='table-container'></div>")
  const table = $("<table></table>")

  // Determine loop direction based on start and end values
  const verticalStep = startRow <= endRow ? 1 : -1
  const horizontalStep = startColumn <= endColumn ? 1 : -1

  // Generate table
  for (
    let i = startRow - verticalStep;
    i !== endRow + verticalStep;
    i += verticalStep
  ) {
    const row = $("<tr></tr>")
    for (
      let j = startColumn - horizontalStep;
      j !== endColumn + horizontalStep;
      j += horizontalStep
    ) {
      const cell = $("<td></td>")
      if (i === startRow - verticalStep && j === startColumn - horizontalStep) {
        cell.addClass("blank_header")
      } else if (i === startRow - verticalStep) {
        cell.html(`<strong>${j}</strong>`).addClass("row_header")
      } else if (j === startColumn - horizontalStep) {
        cell.html(`<strong>${i}</strong>`).addClass("column_header")
      } else {
        cell.text(i * j)
      }

      row.append(cell)
    }

    table.append(row)
  }
  tableContainer.append(table)
  return tableContainer
}

// make the slider
function initializeSlider(sliderId, inputId) {
  $(sliderId).slider({
    range: "min",
    min: -50,
    max: 50,
    slide: function (event, ui) {
      $(inputId).val(ui.value)
    },
    change: function (event, ui) {
      // Trigger validation on input change
      $(inputId).valid()
      if ($("#multiplicationForm").valid()) {
        newTabs()
      }
    },
  })
}

// Function to toggle delete button visibility
function toggleDeleteButtons() {
  const deleteButtons = $("#deleteSelectedTabs")
  const deleteAllButtons = $("#deleteAllTabs")
  const tabs = $("#tabs")
  const tabsCount = $("#tabs ul li").length

  // Show delete buttons if there are tabs, hide otherwise
  if (tabsCount > 0) {
    deleteButtons.show()
    deleteAllButtons.show()
    tabs.show()
  } else {
    deleteButtons.hide()
    deleteAllButtons.hide()
    tabs.hide()
  }
}
