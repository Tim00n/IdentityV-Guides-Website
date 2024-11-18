// Select all circle containers
document.querySelectorAll('.circle-container').forEach((circleContainer) => {
    const spheres = circleContainer.querySelectorAll('.sphere');

    // Add event listener to each circle container
    circleContainer.addEventListener('click', (event) => {
        const sphere = event.target.closest('.sphere');

        // Ensure the sphere exists, is active, and not deactivated
        if (sphere && sphere.classList.contains('active') && !sphere.classList.contains('deactivated')) {
            // Close other tooltips within the same container
            spheres.forEach(s => {
                if (s !== sphere) {
                    s.classList.remove('show-large-tooltip');
                }
            });

            // Toggle the tooltip for the clicked sphere
            sphere.classList.toggle('show-large-tooltip');
        }
    });
});



const container = document.querySelector(".circle-container");

function buildLine(cellAId, cellBId) {
  // Select cells by their IDs
  const cellA = document.getElementById(cellAId);
  const cellB = document.getElementById(cellBId);

  // Create a new line element
  const line = document.createElement("div");
  line.classList.add("line");
  container.appendChild(line);

  // Get bounding rectangles for the cells
  const rectA = cellA.getBoundingClientRect();
  const rectB = cellB.getBoundingClientRect();

  // Calculate centers of each cell
  const centerA = {
    x: rectA.left + rectA.width / 2,
    y: rectA.top + rectA.height / 2,
  };
  const centerB = {
    x: rectB.left + rectB.width / 2,
    y: rectB.top + rectB.height / 2,
  };

  // Calculate the distance and angle between the centers
  const deltaX = centerB.x - centerA.x;
  const deltaY = centerB.y - centerA.y;
  const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
  const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI); // Convert radians to degrees

  // Position the line at the starting point (center of cellA)
  line.style.width = `${distance}px`;
  line.style.transform = `rotate(${angle}deg)`;
  line.style.top = `${centerA.y - container.getBoundingClientRect().top}px`;
  line.style.left = `${centerA.x - container.getBoundingClientRect().left}px`;
  
  //deactivate lines if linked spheres is not activated
  if (cellA.classList.contains("deactivated") || cellB.classList.contains("deactivated")) {
    line.style.opacity = "0.02"; // Adjust the opacity as needed
  }
}

function buildWeb(centerId, connections) {
    //skip if no additionnal center of web (for example if no c0b web)
    if (!document.getElementById(centerId)) {
        return;
    }else {
        //procceed if it exist in html
        connections.forEach(([id1, id2]) => {
            if (document.getElementById(id1) && document.getElementById(id2)) {
                buildLine(id1, id2);
            }
        });
    }
}

const webA = [
    ["c0a", "n1a"], //north
    ["n1a", "n2a"],
    ["n2a", "n3a"],
    ["n2a", "n4a"],
    ["n1a", "n5a"],
    ["n5a", "n6a"],
    ["n1a", "n7a"],
    ["n7a", "n8a"],
    ["n8a", "n9a"],

    ["c0a", "e1a"], // east
    ["e1a", "e2a"],
    ["e2a", "e3a"],
    ["e2a", "e4a"],
    ["e1a", "e5a"],
    ["e5a", "e6a"],
    ["e1a", "e7a"],
    ["e7a", "e8a"],
    ["e8a", "e9a"],

    ["c0a", "s1a"], // South
    ["s1a", "s2a"],
    ["s2a", "s3a"],
    ["s2a", "s4a"],
    ["s1a", "s5a"],
    ["s5a", "s6a"],
    ["s1a", "s7a"],
    ["s7a", "s8a"],
    ["s8a", "s9a"],

    ["c0a", "w1a"], // West
    ["w1a", "w2a"],
    ["w2a", "w3a"],
    ["w2a", "w4a"],
    ["w1a", "w5a"],
    ["w5a", "w6a"],
    ["w1a", "w7a"],
    ["w7a", "w8a"],
    ["w8a", "w9a"],
];

const webB = [
    ["c0b", "n1b"], // North
    ["n1b", "n2b"],
    ["n2b", "n3b"],
    ["n2b", "n4b"],
    ["n1b", "n5b"],
    ["n5b", "n6b"],
    ["n1b", "n7b"],
    ["n7b", "n8b"],
    ["n8b", "n9b"],

    ["c0b", "e1b"], // East
    ["e1b", "e2b"],
    ["e2b", "e3b"],
    ["e2b", "e4b"],
    ["e1b", "e5b"],
    ["e5b", "e6b"],
    ["e1b", "e7b"],
    ["e7b", "e8b"],
    ["e8b", "e9b"],

    ["c0b", "s1b"], // South
    ["s1b", "s2b"],
    ["s2b", "s3b"],
    ["s2b", "s4b"],
    ["s1b", "s5b"],
    ["s5b", "s6b"],
    ["s1b", "s7b"],
    ["s7b", "s8b"],
    ["s8b", "s9b"],

    ["c0b", "w1b"], // West
    ["w1b", "w2b"],
    ["w2b", "w3b"],
    ["w2b", "w4b"],
    ["w1b", "w5b"],
    ["w5b", "w6b"],
    ["w1b", "w7b"],
    ["w7b", "w8b"],
    ["w8b", "w9b"]
];

//delete previous webs and rebuild new ones
function buildAllLines() {
    document.querySelectorAll(".line").forEach(line => line.remove());
    buildWeb("c0a", webA); 
    buildWeb("c0b", webB);
}

window.addEventListener("resize",()=>{
    buildAllLines();
});

buildAllLines();