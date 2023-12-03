// File: script.js
// GUI Assignment: Multiplication Table
// Porchhay Be, UMass Lowell Computer Science,
// porchhay_be@student.uml.edu
// Copyright (c) 2021 by Porchhay. All rights reserved. May be freely copied or
// excerpted for educational purposes with credit to the author.
// updated by Porchhay on November, 10 at 9:00 AM

function generateTable() {
  // Clear previous error messages
  clearErrorMessages()

  // Clear previous table
  const table = document.getElementById("multiplicationTable")
  table.innerHTML = "" 

  // Get form values
  const startHorizontal = document
    .getElementById("startHorizontal")
    .value.trim()
  const endHorizontal = document.getElementById("endHorizontal").value.trim()
  const startVertical = document.getElementById("startVertical").value.trim()
  const endVertical = document.getElementById("endVertical").value.trim()

  // Convert values to integers
  const startHorizontalInt = parseInt(startHorizontal)
  const endHorizontalInt = parseInt(endHorizontal)
  const startVerticalInt = parseInt(startVertical)
  const endVerticalInt = parseInt(endVertical)

  // Check if any input is empty and check if start is less than end
  if (
    !startHorizontal ||
    !endHorizontal ||
    !startVertical ||
    !endVertical ||
    startVerticalInt > endVerticalInt ||
    startHorizontalInt > endHorizontalInt ||
    (endVerticalInt - startVerticalInt + 1) *
      (endHorizontalInt - startHorizontalInt + 1) >
      100000
  ) {
    if (!startHorizontal) {
      displayError("Start Row is required.", "error-startHorizontal")
    }
    if (!endHorizontal) {
      displayError("End Row is required.", "error-endHorizontal")
    }
    if (!startVertical) {
      displayError("Start Column is required.", "error-startVertical")
    }
    if (!endVertical) {
      displayError("End Column is required.", "error-endVertical")
    }
    if (startHorizontalInt > endHorizontalInt) {
      displayError(
        "Start row must be less than or equal to end row.",
        "error-startHorizontal"
      )
    }

    if (startVerticalInt > endVerticalInt) {
      displayError(
        "Start column must be less than or equal to End column.",
        "error-startVertical"
      )
    }

    if (
      (endVerticalInt - startVerticalInt + 1) *
        (endHorizontalInt - startHorizontalInt + 1) >
      100000
    ) {
      displayError(
        "The product of rows and columns must be less than or equal to 10,000.",
        "error-startVertical"
      )
      displayError(
        "The product of rows and columns must be less than or equal to 10,000.",
        "error-startHorizontal"
      )
      displayError(
        "The product of rows and columns must be less than or equal to 10,000.",
        "error-endVertical"
      )
      displayError(
        "The product of rows and columns must be less than or equal to 10,000.",
        "error-endHorizontal"
      )
    }
    return
  }

  // Generate table
  for (let i = startVerticalInt - 1; i <= endVerticalInt; i++) {
    const row = table.insertRow()
    for (let j = startHorizontalInt - 1; j <= endHorizontalInt; j++) {
      const cell = row.insertCell()

      if (i === startVerticalInt - 1 && j === startHorizontalInt - 1) {
        // insert cell with no content and className header
        cell.className = "blank_header"
      } else if (i === startVerticalInt - 1) {
        cell.innerHTML = `<strong>${j}</strong>`
        cell.className = "row_header"
      } else if (j === startHorizontalInt - 1) {
        cell.innerHTML = `<strong>${i}</strong>`
        cell.className = "column_header"
      } else {
        cell.textContent = i * j
      }
    }
  }
}

function displayError(message, elementId) {
  // Display error message next to the input
  const errorElement = document.getElementById(elementId)
  errorElement.textContent = message
  errorElement.style.display = "block" // Ensure the error message is visible

  // Add red border to the input element with a smooth transition
  const inputElement = document.getElementById(elementId.replace("error-", ""))
  inputElement.style.transition = "border-color 0.2s ease-in-out"
  inputElement.style.borderColor = "red"

  setTimeout(() => {
    inputElement.style.borderColor = "#ddd"
  }, 2000)
}

function clearErrorMessages() {
  // Clear all error messages and hide them
  const errorElements = document.querySelectorAll(".error-message")
  errorElements.forEach((element) => {
    element.textContent = ""
    element.style.display = "none" // Hide the error message
  })

  const inputElements = document.querySelectorAll("input")
  inputElements.forEach((element) => {
    element.style.transition = "border-color 0.3s ease-in-out"
    element.style.borderColor = "#ddd" // Reset to the default border color
  })
}
