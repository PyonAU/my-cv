const channels = [
  {label: "backlog", style: "backlogColumn"},
  {label: "inProgress", style: "progressColumn"},
  {label: "complete", style: "completeColumn"},
  {label: "onHold", style: "onHoldColumn"}
];

const labelsMap = {
  backlog: "Backlog",
  inProgress: "In Progress",
  complete: "Complete",
  onHold: "On Hold",
};


export { channels, labelsMap };
