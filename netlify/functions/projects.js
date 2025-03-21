const projects = [
    {
      id: 1,
      name: "Geriatric Psychiatry Green Card Project",
      author: "Danny Zhang",
      languages: ["JavaScript", "React"],
      description: "A platform for displaying prescription cards for elderly patients.",
      technologies: ["Visual Studio Code", "MAMP"]
    },
    {
      id: 2,
      name: "CSCI3172 QuickCash Project",
      author: ["David Wray", " Joshua Vidal", " Robyn Treen", " Danny Zhang", " Tarang", " Nathan"],
      description: "An app that helps employees find jobs and employers post jobs.",
      technologies: ["Android Studio", "Figma"],
      languages: ["Java", "XML"],

    }
  ];
  
  exports.handler = async () => {
    return {
      statusCode: 200,
      body: JSON.stringify(projects)
    };
  };
  