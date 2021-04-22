import LoadProducts from "../grapql/loadProducts";
import LoadSprints from "../grapql/loadSprint";
import LoadStories from "../grapql/loadStories";
import LoadSubtasks from "../grapql/loadSubtasks";

const LoadAll = async () => {
  let loadedProducts = await LoadProducts();
  let loadedSprints = await LoadSprints();
  let loadedStories = await LoadStories();
  let loadedSubtasks = await LoadSubtasks();

  //!! Warning !!
  //! Fucking monstrosity below
  //! Read at your own risk

  let masterTree = {
    products: []
  }

  for (let a = 0; a < loadedProducts.length; a++) {
    masterTree.products.push({
      productID: loadedProducts[a].productID,
      productName: loadedProducts[a].productName,
      sprints: [],
    });

    for (let b = 0; b < loadedSprints.length; b++) {
      if (loadedSprints[b].productID === loadedProducts[a].productID) {
        masterTree.products[a].sprints.push({
          sprintID: loadedSprints[b].sprintID,
          sprintNumber: loadedSprints[b].sprintNumber,
          stories: [],
        });

        for (let c = 0; c < loadedStories.length; c++) {
          for (let d = 0; d < masterTree.products[a].sprints.length; d++) {
            if (
              loadedStories[c].sprintID ===
              masterTree.products[a].sprints[d].sprintID
            ) {
              //* Need to validate that the sprint has not already been added because this design is shit
              let story = {
                storyID: loadedStories[c].storyID,
                storyDescription: loadedStories[c].storyDescription,
                pointEstimate: loadedStories[c].pointEstimate,
                costEstimate: loadedStories[c].costEstimate,
                subtasks: [],
              };

              if (masterTree.products[a].sprints[d].stories.length === 0)
                masterTree.products[a].sprints[d].stories.push(story);
              else {
                let dupe = false;
                for (
                  let z = 0;
                  z < masterTree.products[a].sprints[d].stories.length;
                  z++
                ) {
                  if (
                    story.storyID ===
                    masterTree.products[a].sprints[d].stories[z].storyID
                  )
                    dupe = true;
                }
                if (!dupe) {
                  masterTree.products[a].sprints[d].stories.push(story);
                  for (let e = 0; e < loadedSubtasks.length; e++) {
                    for (
                      let f = 0;
                      f < masterTree.products[a].sprints[d].stories.length;
                      f++
                    ) {
                      let subtask = {
                        subtaskID: loadedSubtasks[f].subtaskID,
                        taskDescription: loadedSubtasks[f].taskDescription,
                        hoursWorked: loadedSubtasks[f].hoursWorked,
                        hoursLeft: loadedSubtasks[f].hoursLeft,
                      };

                      if (
                        masterTree.products[a].sprints[d].stories[f].subtasks
                          .length === 0
                      )
                        masterTree.products[a].sprints[d].stories[
                          f
                        ].subtasks.push(subtask);
                      else {
                        let dupe2 = false;
                        for (
                          let x = 0;
                          x <
                          masterTree.products[a].sprints[d].stories[f].subtasks
                            .length;
                          x++
                        ) {
                          if (
                            subtask.subtaskID ===
                            masterTree.products[a].sprints[d].stories[f]
                              .subtasks[x].subtaskID
                          )
                            dupe2 = true;
                        }

                        if (!dupe2)
                          masterTree.products[a].sprints[d].stories[
                            f
                          ].subtasks.push(subtask);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  return masterTree;

};

export default LoadAll;
