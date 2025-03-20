const projects = [
    {
      id: 1,
      name: "Geriatric Psychiatry Green Card Project",
      description: "A platform for displaying prescription cards for elderly patients.",
      technologies: ["React", "JavaScript"]
    },
    {
      id: 2,
      name: "CSCI3172 QuickCash Project",
      description: "An app that helps employees find jobs and employers post jobs.",
      technologies: ["Android Studio", "Figma"]
    }
  ];
  
  exports.handler = async () => {
    return {
      statusCode: 200,
      body: JSON.stringify(projects)
    };
  };
  