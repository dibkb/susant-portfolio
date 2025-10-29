export type Project = {
  name: string
  description: string
  link: string
  video: string
  blog: string
  id: string
  skills?: string[]
}

export type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
  details: string[]
  skills?: string[]
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export type Education = {
  school: string
  degree: string
  start: string
  end: string
  cgpa?: number
  grade?: string
}
export type Achievements = {
  title: string
  description: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Spacer Defect Detection',
    blog: 'blog/spacer-defect-detection',
    description:
      'Advanced computer vision system using YOLOv5 for detecting 23 defect classes, achieving 0.56 mAP@0.5 with Flask-based API and real-time visualization.',
    link: 'https://github.com/Susanta2102/Spacer-Defect-Detection-Using-YOLOv5-Flask-',
    video:
      'https://raw.githubusercontent.com/Susanta2102/SusantaBaidya.github.io/refs/heads/main/images/proj_spacer.webp',
    id: 'project21',
    skills: ['Computer Vision', 'YOLOv5', 'Flask', 'Python'],
  },
  {
    name: 'RAG-Based Semantic Quote Retrieval',
    blog: 'blog/rag-based-semantic-quote-retrieval',
    description:
      'Complete RAG pipeline with semantic search using Sentence Transformers and FAISS vector indexing, processing 2,507+ quotes with 100% query success rate.',
    link: 'https://github.com/Susanta2102/RAG-Based-Semantic-Quote-Retrieval-System',
    video:
      'https://raw.githubusercontent.com/Susanta2102/SusantaBaidya.github.io/refs/heads/main/images/proj_rag.png',
    id: 'project443',
    skills: ['RAG', 'FAISS', 'Transformers', 'NLP'],
  },
  {
    name: 'CLI Agent - Agentic AI System',
    blog: 'blog/cli-agent',
    description:
      'Advanced agentic AI system with fine-tuned LLM that autonomously converts natural language instructions into precise command-line operations with intelligent planning.',
    link: 'https://github.com/Susanta2102/CLI-Agent-Natural-Language-to-Command-Line-Interface',
    video:
      'https://raw.githubusercontent.com/Susanta2102/SusantaBaidya.github.io/refs/heads/main/images/cli%20agent.png',
    id: 'project2',
    skills: ['LLM', 'CLI', 'Agentic AI', 'NLP'],
  },
  {
    name: 'Thunderstorm Prediction System',
    blog: 'blog/thunderstorm-prediction-system',
    description:
      'Deep learning-based prediction system using bidirectional LSTM, achieving 69% accuracy with 12-hour lead time for Uttar Pradesh weather forecasting.',
    link: 'https://github.com/Susanta2102/Thunderstorm-Prediction-System-for-Uttar-Pradesh',
    video:
      'https://raw.githubusercontent.com/Susanta2102/SusantaBaidya.github.io/refs/heads/main/images/thunderstorm.webp',
    id: 'project2fs',
    skills: ['LSTM', 'Deep Learning', 'Weather Prediction', 'Flask'],
  },
  {
    name: 'Adaptive X-ray Preprocessing Pipeline',
    blog: 'blog/thunderstorm-prediction-system',
    description:
      'Advanced image preprocessing pipeline for dental IOPA X-rays, enhancing diagnostic accuracy while maintaining clinical workflow efficiency.',
    link: 'https://github.com/Susanta2102/Adaptive-Image-Preprocessing-Pipeline-for-IOPA-X-rays',
    video:
      'https://raw.githubusercontent.com/Susanta2102/SusantaBaidya.github.io/refs/heads/main/images/proj_xray.png',
    id: 'project2fs',
    skills: [
      'Medical Imaging',
      'Computer Vision',
      'Image Processing',
      'Healthcare AI',
    ],
  },
  {
    name: 'Customer Support Ticket Classifier',
    blog: 'blog/thunderstorm-prediction-system',
    description:
      'ML pipeline that automatically classifies customer support tickets by issue type and urgency level with intelligent entity extraction capabilities..',
    link: 'https://github.com/Susanta2102/Customer-Support-Ticket-Classifier',
    video:
      'https://raw.githubusercontent.com/Susanta2102/SusantaBaidya.github.io/refs/heads/main/images/Support%20Ticket%20Classifier.jpg',
    id: 'project2fs',
    skills: [
      'Medical Imaging',
      'Computer Vision',
      'Image Processing',
      'Healthcare AI',
    ],
  },
  {
    name: 'DeepStock - Stock Prediction',
    blog: 'blog/thunderstorm-prediction-system',
    description:
      'Deep RNN model trained on five years of historical Google stock price data to forecast stock performance over a two-month period with high accuracy.',
    link: 'https://github.com/Susanta2102/DeepStock',
    video:
      'https://raw.githubusercontent.com/Susanta2102/SusantaBaidya.github.io/refs/heads/main/images/Stock%20Prediction.png',
    id: 'project2fs',
    skills: ['RNN', 'Time Series', 'Financial ML', 'TensorFlow'],
  },
  {
    name: 'RERA Odisha Project Scraper',
    blog: 'blog/thunderstorm-prediction-system',
    description:
      'Python web scraper that extracts comprehensive project information from the Odisha RERA website with automated data processing and analysis.',
    link: 'https://github.com/Susanta2102/RERA-Odisha-Project-Scraper',
    video:
      'https://raw.githubusercontent.com/Susanta2102/SusantaBaidya.github.io/refs/heads/main/images/webscrap.png',
    id: 'project2fs',
    skills: ['Neural Networks', 'NumPy', 'Deep Learning', 'Python'],
  },
  {
    name: 'Neural Network from Scratch',
    blog: 'blog/thunderstorm-prediction-system',
    description:
      'Implementation of neural network fundamentals using Python and NumPy, covering weight initialization, forward/backward propagation, and gradient descent optimization.',
    link: 'https://github.com/Susanta2102/Neural-Network-from-scratch',
    video:
      'https://raw.githubusercontent.com/Susanta2102/SusantaBaidya.github.io/refs/heads/main/images/NN.png',
    id: 'project2fs',
    skills: ['Neural Networks', 'NumPy', 'Deep Learning', 'Python'],
  },
  {
    name: 'Gemini-Powered Story Creator',
    blog: 'blog/thunderstorm-prediction-system',
    description:
      "Generative AI application leveraging Google's Gemini LLM that analyzes uploaded images to generate unique creative stories, demonstrating multimodal AI capabilities.",
    link: 'https://github.com/Susanta2102/Story-Teller',
    video:
      'https://raw.githubusercontent.com/Susanta2102/SusantaBaidya.github.io/refs/heads/main/images/proj_1.jpg',
    id: 'project2fs',
    skills: ['Gemini AI', 'Gen AI', 'Multimodal', 'Streamlit'],
  },
  {
    name: 'Flight Fare Prediction System',
    blog: 'blog/thunderstorm-prediction-system',
    description:
      'User-centric Streamlit application for forecasting flight ticket prices. Achieved 99% accuracy using Random Forest Regression with comprehensive feature engineering.',
    link: 'https://github.com/Susanta2102/Flight-Fare-Prediction',
    video:
      'https://raw.githubusercontent.com/Susanta2102/SusantaBaidya.github.io/refs/heads/main/images/proj_2.jpg',
    id: 'project2fs',
    skills: [
      'Machine Learning',
      'Random Forest',
      'Streamlit',
      'Price Prediction',
    ],
  },
  {
    name: 'Book Recommendation System',
    blog: 'blog/thunderstorm-prediction-system',
    description:
      'Intelligent recommendation system using Streamlit and BERT-based NLP, providing tailored book suggestions from Goodreads dataset based on genre preferences.',
    link: 'https://github.com/Susanta2102/Book-Recommendation-System-using-Streamlit',
    video:
      'https://raw.githubusercontent.com/Susanta2102/SusantaBaidya.github.io/refs/heads/main/images/proj_4.png',
    id: 'project2fs',
    skills: ['Recommendation', 'BERT', 'NLP', 'Streamlit'],
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Solulever',
    title: 'AI/ML Intern',
    start: 'July 2025',
    end: 'Present',
    link: 'https://www.deepmatrix.ai/',
    id: 'work0001',
    details: [
      'Developed optimized pipelines for object detection and defect detection using YOLO, implementing custom algorithms for Adani grading ring object detection that improved detection and inference speed by 35%.',
      'Implemented various detection algorithms for manufacturing defect identification, creating streamlined training workflows that improved accuracy by 28%. and reduced false positives by 45%.',
    ],
    skills: ['Computer Vision', 'YOLO', 'Object Detection', 'Manufacturing AI'],
  },
  {
    company: 'DeepMatrix, Bengaluru',
    title: 'AI/ML Intern',
    start: 'April 2025',
    end: 'July 2025',
    link: 'https://www.deepmatrix.ai/',
    id: 'work1',
    details: [
      'Developed optimized pipelines for object detection and defect detection using YOLO, implementing custom algorithms for Adani grading ring object detection that improved detection and inference speed by 35%.',
      'Implemented various detection algorithms for manufacturing defect identification, creating streamlined training workflows that improved accuracy by 28%. and reduced false positives by 45%.',
    ],
    skills: ['Computer Vision', 'YOLO', 'Object Detection', 'Manufacturing AI'],
  },
  {
    company: 'Climate Resilience Observatory (CRO), UP Government',
    title: 'Data Science Intern',
    start: 'Sep 2024',
    end: 'March 2025',
    link: 'https://www.cro.gov.in/',
    id: 'work2',
    details: [
      'Developed thunderstorm prediction system for Uttar Pradesh using bidirectional LSTM, achieving 69% accuracy and 0.74 AUC score with a 12 hour lead time by integrating multiple meteorological data sources',
      'Developed Flask-based web interface with real-time lightning tracking and geospatial visualizations, creating risk dashboards and automated ETL pipelines that improved emergency response efficiency by 40%',
    ],
    skills: [
      'LSTM',
      'Deep Learning',
      'Weather Forecasting',
      'Flask',
      'Geospatial Analysis',
    ],
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'Why I left my job to start my own company',
    description:
      'A deep dive into my decision to leave my job and start my own company',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-2',
  },
  {
    title: 'What I learned from my first year of freelancing',
    description:
      'A look back at my first year of freelancing and what I learned',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-3',
  },
]
export const EDUCATION: Education[] = [
  {
    school: 'Indian Institute of Information Technology Lucknow',
    degree:
      'Master of Science (Msc) Machine Learning and Artificial Intelligence',
    start: 'August 2023',
    end: '2025',
    cgpa: 8.2,
  },
  {
    school: 'Maharaja Bir Bikram College, Agartala',
    degree: 'Bachelor of Science (Honours)',
    start: 'July 2020',
    end: 'May 2023',
    grade: '72%',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/Susanta2102',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/susanta-baidya-03436628a/',
  },
  {
    label: 'Kaggle',
    link: 'https://www.kaggle.com/susanta21',
  },
  {
    label: 'Twitter',
    link: 'https://x.com/SusantBaidya',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/ez.susant/',
  },
  {
    label: 'Resume pdf',
    link: '/resume.pdf',
  },
]

export const ACHIEVEMENTS: Achievements[] = [
  {
    title: 'AI/ML for Geodata Analysis',
    description: 'Indian Space Research Organisation (ISRO)',
  },
  {
    title: 'IIT JAM 2023',
    description: 'AIR 218 (out of 3563) | Top 6.12%',
  },
  {
    title: 'CodeSmash 2.0',
    description: '171st of 3000+ participants (97/100)',
  },
  {
    title: 'Kaggle Competition',
    description: '0.81 score in PII Detection challenge',
  },
]
export const EMAIL = 'susantabaidya20133@gmail.com'
