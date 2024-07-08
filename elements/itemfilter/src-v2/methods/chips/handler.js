export function handleChipClickMethod(evt, EOxItemFilterChips) {
  EOxItemFilterChips.renderRoot.querySelectorAll(".chip").forEach((chip) => {
    chip.classList.remove("highlighted");
  });
  evt.target.classList.add("highlighted");
  EOxItemFilterChips.requestUpdate();
}

export function handleCloseMethod(event, index, EOxItemFilterChips) {
  EOxItemFilterChips.controller.remove(event, index);
}

export function keyboardEventListenerMethod(event, EOxItemFilterChips) {
  const { code } = event;
  if (
    EOxItemFilterChips.parentElement.classList.contains("hidden") &&
    ["ArrowLeft", "ArrowRight", "Backspace"].includes(code)
  )
    return;
  if (code === "Space") event.preventDefault();
  if (!["Escape", "Space", "Enter"].includes(code)) event.stopPropagation();
  if (["ArrowLeft", "ArrowRight", "Escape", "Backspace"].includes(code))
    handleKeyboard(code, event.target.value ?? "", EOxItemFilterChips);
}

function handleKeyboard(key, textValue, that) {
  const highlightedChip = that.renderRoot.querySelector(".chip.highlighted");
  if (key === "Escape" || textValue) {
    if (highlightedChip) {
      highlightedChip.classList.remove("highlighted");
    }
  }
  if (key === "Backspace" && !textValue) {
    if (that.items.length) {
      console.log(highlightedChip);
      if (highlightedChip) {
        highlightedChip.querySelector(".chip-item-close").click();
        that.items.splice(
          Array.from(that.renderRoot.querySelectorAll(".chip")).indexOf(
            highlightedChip
          ),
          1
        );
      }
      const lastChip =
        that.renderRoot.querySelectorAll(".chip")[
          that.renderRoot.querySelectorAll(".chip").length - 1
        ];
      if (!lastChip.classList.contains("highlighted")) {
        lastChip.classList.add("highlighted");
      }
      that.requestUpdate();
    }
    that._dispatchEvent();
  }
  if ((key === "ArrowLeft" || key === "ArrowRight") && !textValue) {
    if (that.renderRoot.querySelectorAll(".chip").length < 1) {
      return;
    }
    let highlightedChipIndex = 0;
    const highlightedChip = that.renderRoot.querySelector(".chip.highlighted");
    if (highlightedChip) {
      highlightedChipIndex = Array.from(
        that.renderRoot.querySelectorAll(".chip")
      ).indexOf(highlightedChip);
      highlightedChip.classList.remove("highlighted");
    }
    highlightedChipIndex =
      highlightedChipIndex + (key === "ArrowLeft" ? -1 : +1);
    if (key === "ArrowLeft" && highlightedChipIndex < 0) {
      highlightedChipIndex =
        that.renderRoot.querySelectorAll(".chip").length - 1;
    }
    if (
      key === "ArrowRight" &&
      highlightedChipIndex >
        that.renderRoot.querySelectorAll(".chip").length - 1
    ) {
      highlightedChipIndex = 0;
    }
    Array.from(that.renderRoot.querySelectorAll(".chip"))[
      highlightedChipIndex
    ].classList.add("highlighted");
  }
}
