const questions = [
  {
    text: "What does the acronym HTML stand for?",
    options: [
      "A. Hyper Text Markup Language",
      "B. High-level Text Management Language",
      "C. Hyperlink and Text Markup Language",
      "D. Home Tool Markup Language",
    ],
    correctIndex: 0,
  },
  {
    text: "What does the acronym HTML stand for?",
    options: [
      "A. Hyper Text Markup Language",
      "B. High-level Text Management Language",
      "C. Hyperlink and Text Markup Language",
      "D. Home Tool Markup Language",
    ],
    correctIndex: 0,
  },
  {
    text: "Which programming language is commonly used for web development?",
    options: ["A. Java", "B. Python", "C. JavaScript", "D. C++"],
    correctIndex: 2,
  },
  {
    text: "What is the purpose of CSS in web development?",
    options: [
      "A. Creating database structures",
      "B. Styling and formatting web pages",
      "C. Server-side scripting",
      "D. Defining logical structures in HTML",
    ],
    correctIndex: 1,
  },
  {
    text: "Which company developed the Android operating system?",
    options: ["A. Apple", "B. Google", "C. Microsoft", "D. Samsung"],
    correctIndex: 1,
  },
  {
    text: "What is the role of a firewall in computer security?",
    options: [
      "A. Encrypt data during transmission",
      "B. Filter and control incoming/outgoing network traffic",
      "C. Manage computer memory",
      "D. Monitor keyboard inputs",
    ],
    correctIndex: 1,
  },
  {
    text: "What does API stand for?",
    options: [
      "A. Application Programming Interface",
      "B. Advanced Program Instructions",
      "C. Automatic Programming Interface",
      "D. Application Process Integration",
    ],
    correctIndex: 0,
  },
  {
    text: "In the context of databases, what does SQL stand for?",
    options: [
      "A. Structured Query Language",
      "B. Simple Question Language",
      "C. Sequential Query Logic",
      "D. Server Query Language",
    ],
    correctIndex: 0,
  },
  {
    text: "Which encryption algorithm is commonly used for secure communication on the internet (HTTPS)?",
    options: ["A. DES", "B. RSA", "C. AES", "D. MD5"],
    correctIndex: 2,
  },
  {
    text: "What is the purpose of a version control system (e.g., Git) in software development?",
    options: [
      "A. Manage and track changes in source code",
      "B. Monitor network traffic",
      "C. Control computer peripherals",
      "D. Create graphical user interfaces",
    ],
    correctIndex: 0,
  },
  {
    text: "What does the term 'IoT' stand for?",
    options: [
      "A. Internet of Things",
      "B. Input-output Technology",
      "C. Integrated Online Tools",
      "D. Information on Tablets",
    ],
    correctIndex: 0,
  },
  {
    text: "What does the term 'AI' stand for?",
    options: [
      "A. Artificial Intelligence",
      "B. Advanced Interaction",
      "C. Automated Integration",
      "D. Augmented Information",
    ],
    correctIndex: 0,
  },
  {
    text: "Which programming language is often used for machine learning?",
    options: ["A. Java", "B. Python", "C. C#", "D. Ruby"],
    correctIndex: 1,
  },
  {
    text: "What is the purpose of a neural network in AI?",
    options: [
      "A. Image processing",
      "B. Speech recognition",
      "C. Pattern recognition",
      "D. All of the above",
    ],
    correctIndex: 3,
  },
  {
    text: "What is the main goal of natural language processing (NLP)?",
    options: [
      "A. Translate languages",
      "B. Understand and generate human-like language",
      "C. Convert speech to text",
      "D. Simulate natural conversations",
    ],
    correctIndex: 1,
  },
  {
    text: "Which algorithm is commonly used for clustering in machine learning?",
    options: [
      "A. K-Means",
      "B. Decision Trees",
      "C. Support Vector Machines",
      "D. Random Forest",
    ],
    correctIndex: 0,
  },
  {
    text: "What does the acronym API stand for in the context of web development?",
    options: [
      "A. Advanced Programming Interface",
      "B. Application Programming Interface",
      "C. Automated Processing Interface",
      "D. Adaptive Program Integration",
    ],
    correctIndex: 1,
  },
  {
    text: "What is the significance of Big O notation in algorithms?",
    options: [
      "A. It measures the size of data",
      "B. It represents the order of an algorithm's time complexity",
      "C. It specifies the maximum input size",
      "D. It defines the output space of an algorithm",
    ],
    correctIndex: 1,
  },
  {
    text: "In web development, what does the term 'AJAX' stand for?",
    options: [
      "A. Asynchronous JavaScript and XML",
      "B. Advanced JSON and XML",
      "C. Automated JavaScript and XHTML",
      "D. All-JavaScript and XML",
    ],
    correctIndex: 0,
  },
  {
    text: "Which data structure follows the Last In, First Out (LIFO) principle?",
    options: ["A. Queue", "B. Stack", "C. Linked List", "D. Hash Table"],
    correctIndex: 1,
  },
  {
    text: "What is the primary function of Docker in software development?",
    options: [
      "A. Version control",
      "B. Code compilation",
      "C. Containerization",
      "D. Continuous integration",
    ],
    correctIndex: 2,
  },
  {
    text: "Which design pattern is used to create an object in a way that the same object is returned whenever it is called?",
    options: [
      "A. Factory Pattern",
      "B. Singleton Pattern",
      "C. Observer Pattern",
      "D. Decorator Pattern",
    ],
    correctIndex: 1,
  },
  {
    text: "What is the purpose of the 'await' keyword in asynchronous JavaScript?",
    options: [
      "A. It declares a variable",
      "B. It makes a function asynchronous",
      "C. It halts the execution until the Promise is resolved",
      "D. It defines a loop in asynchronous code",
    ],
    correctIndex: 2,
  },
  {
    text: "Which data structure is used for implementing a queue in programming?",
    options: ["A. Array", "B. Linked List", "C. Stack", "D. Heap"],
    correctIndex: 1,
  },
  {
    text: "What is the purpose of the 'map' function in JavaScript?",
    options: [
      "A. To create a new array with the results of calling a provided function on every element",
      "B. To remove elements from an array",
      "C. To concatenate two arrays",
      "D. To filter elements from an array",
    ],
    correctIndex: 0,
  },
  {
    text: "In machine learning, what is a hyperparameter?",
    options: [
      "A. A parameter that is learned by the model during training",
      "B. A parameter that controls the learning process",
      "C. A data point in a dataset",
      "D. A metric used to evaluate model performance",
    ],
    correctIndex: 1,
  },
  {
    text: "What is the purpose of the 'git merge' command in version control?",
    options: [
      "A. To create a new branch",
      "B. To apply changes from one branch into another",
      "C. To delete a branch",
      "D. To view the commit history",
    ],
    correctIndex: 1,
  },
  {
    text: "Which sorting algorithm has the best average-case time complexity?",
    options: [
      "A. Bubble Sort",
      "B. Merge Sort",
      "C. Quick Sort",
      "D. Selection Sort",
    ],
    correctIndex: 2,
  },
  {
    text: "What does the acronym CRUD stand for in the context of database operations?",
    options: [
      "A. Create, Read, Update, Delete",
      "B. Compile, Run, Update, Debug",
      "C. Copy, Replace, Undo, Delete",
      "D. Code, Review, Update, Deploy",
    ],
    correctIndex: 0,
  },
  {
    text: "Which JavaScript framework is commonly used for building user interfaces?",
    options: ["A. React", "B. Angular", "C. Vue.js", "D. Ember.js"],
    correctIndex: 0,
  },
  {
    text: "What is the purpose of the 'try...catch' statement in JavaScript?",
    options: [
      "A. To define a function",
      "B. To handle errors in a controlled way",
      "C. To declare a variable",
      "D. To create a loop",
    ],
    correctIndex: 1,
  },
  {
    text: "In AI, what does the term 'overfitting' refer to?",
    options: [
      "A. A model that is too simple",
      "B. A model that is too complex and learns noise in the training data",
      "C. A model with no training data",
      "D. A model that fails to converge",
    ],
    correctIndex: 1,
  },
  {
    text: "What is the purpose of the 'else' statement in conditional statements?",
    options: [
      "A. To execute a block of code if a condition is true",
      "B. To define a default case when no other conditions are met",
      "C. To break out of a loop",
      "D. To define a function",
    ],
    correctIndex: 1,
  },
  {
    text: "What does YOLO stand for in YOLOv5?",
    options: [
      "A. You Only Look Once",
      "B. Your Own Learning Objectives",
      "C. Yielding Optimal Learning Outputs",
      "D. Yellow Ostrich Learning Opportunity",
    ],
    correctIndex: 0,
  },
  {
    text: "Which version of YOLO introduced the YOLOv5 model?",
    options: ["A. YOLOv2", "B. YOLOv3", "C. YOLOv4", "D. YOLOv5"],
    correctIndex: 3,
  },
  {
    text: "In YOLOv5, what is the primary improvement over its predecessors?",
    options: [
      "A. Faster inference speed",
      "B. Higher accuracy",
      "C. Improved memory efficiency",
      "D. Support for more object classes",
    ],
    correctIndex: 0,
  },
  {
    text: "What is the default backbone architecture used in YOLOv5?",
    options: ["A. ResNet", "B. VGGNet", "C. MobileNet", "D. Darknet"],
    correctIndex: 3,
  },
  {
    text: "Which programming language is YOLOv5 primarily implemented in?",
    options: ["A. Python", "B. Java", "C. C++", "D. MATLAB"],
    correctIndex: 0,
  },
  {
    text: "What is the purpose of anchor boxes in YOLOv5?",
    options: [
      "A. To hold the model's weights",
      "B. To represent the locations of objects",
      "C. To improve gradient descent optimization",
      "D. To store pre-trained feature maps",
    ],
    correctIndex: 1,
  },
  {
    text: "How does YOLOv5 handle multiple object scales and sizes?",
    options: [
      "A. By using a single fixed anchor box",
      "B. By dividing the input image into a grid",
      "C. By resizing all objects to a standard size",
      "D. By applying random scaling during training",
    ],
    correctIndex: 1,
  },
  {
    text: "What is the output format of YOLOv5's bounding box predictions?",
    options: [
      "A. (x, y, width, height)",
      "B. (top, left, bottom, right)",
      "C. (center_x, center_y, width, height)",
      "D. (start_x, start_y, end_x, end_y)",
    ],
    correctIndex: 2,
  },
  {
    text: "Which image preprocessing technique is commonly used in YOLOv5?",
    options: [
      "A. Histogram equalization",
      "B. Gaussian blur",
      "C. Data augmentation",
      "D. Edge detection",
    ],
    correctIndex: 2,
  },
  {
    text: "What is the primary metric used to evaluate the performance of YOLOv5?",
    options: [
      "A. Accuracy",
      "B. Precision-Recall",
      "C. F1 score",
      "D. Mean Average Precision (mAP)",
    ],
    correctIndex: 3,
  },
  {
    text: "What is the purpose of labeling in the context of machine learning?",
    options: [
      "A. Enhancing dataset visualization",
      "B. Making datasets more colorful",
      "C. Assigning meaningful annotations to data",
      "D. Applying artistic effects to images",
    ],
    correctIndex: 2,
  },
  {
    text: "Which type of annotation involves drawing rectangles around objects in an image?",
    options: [
      "A. Point annotation",
      "B. Segmentation",
      "C. Bounding box",
      "D. Polygon annotation",
    ],
    correctIndex: 2,
  },
  {
    text: "In image segmentation, what is the term for assigning each pixel to a specific object or class?",
    options: [
      "A. Object detection",
      "B. Pixel labeling",
      "C. Instance segmentation",
      "D. Semantic segmentation",
    ],
    correctIndex: 3,
  },
  {
    text: "What is the purpose of labeling bounding boxes for object detection?",
    options: [
      "A. To provide spatial coordinates of objects",
      "B. To create artistic frames around objects",
      "C. To add decorative elements to images",
      "D. To generate random shapes in datasets",
    ],
    correctIndex: 0,
  },
  {
    text: "Which annotation type is commonly used for annotating keypoints or landmarks on objects?",
    options: [
      "A. Bounding box",
      "B. Point annotation",
      "C. Segmentation",
      "D. Area annotation",
    ],
    correctIndex: 1,
  },
  {
    text: "What is the main challenge when labeling images for machine learning in real-world scenarios?",
    options: [
      "A. Lack of available annotation tools",
      "B. Difficulty in finding suitable colors",
      "C. Subjectivity in annotation interpretation",
      "D. Absence of colorful objects in images",
    ],
    correctIndex: 2,
  },
  {
    text: "What is the advantage of using automated tools for labeling datasets?",
    options: [
      "A. Reduced accuracy",
      "B. Faster annotation speed",
      "C. Increased human error",
      "D. Limited scalability",
    ],
    correctIndex: 1,
  },
  {
    text: "Which annotation format is widely used for sharing labeled datasets?",
    options: ["A. JSON", "B. XML", "C. YAML", "D. CSV"],
    correctIndex: 0,
  },
];

module.exports = questions;
