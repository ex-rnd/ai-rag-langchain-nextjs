# 🤖 Next.js LangChain AI Chatbot

A **Next.js + LangChain + Ollama-powered AI chat application** that supports **streaming responses, custom personas, prompt templates**, and local LLMs such as **Qwen, Mistral**, and others via the **OpenAI‑compatible Ollama API**.
This project demonstrates how to build a **production‑ready AI chat interface** using:
- **Next.js App Router**
- **LangChain RunnableSequence pipelines**
- **Vercel AI SDK (useChat)**
- **Local LLMs served through Ollama**
- **Custom prompt engineering (personas, memory, templates).**

---


## ✳️ Visual Overview 

<div align="center">
  <video src="https://github.com/user-attachments/assets/6037b59d-defc-40b5-8e5a-4adb6a88c52d" width="400" />
</div>

---

## ✨ Features
- ⚡ **Real‑time streaming chat** using Vercel AI SDK
- 🧠 **LangChain pipelines** (Prompt → Model → Parser → Stream)
- 🤖 **Local LLM support** via Ollama (Qwen, Mistral, Llama, etc.)
- 🎭 **Custom personas** (Comedian, Pirate, etc.)
- 📝 **Prompt templates** with memory injection
- 🧩 **Multiple API routes** demonstrating different AI behaviors
- 💻 **Clean, modern chat UI** built with ShadCN components
- 🔌 **OpenAI‑compatible API** — easy to swap models
- 🛠️ **Extendable architectur**e for RAG, tools, agents, and more

---

## 🛠️ Tech Stack
- **Python 3.8+**
- **Streamlit** – UI framework
- **TensorFlow / Keras** – Deep Learning model
- **Pandas / NumPy** – Data handling
- **CSV Dataset** – Obesity data (age, gender, height, weight, BMI, activity level)

---

## 📂 Project Structure
```
obesity-detector/
│── model/
│   └── model.keras                      # Trained DL model
│── dataset/
│   └── obesity_data.csv                # Dataset with features
│── images/
│   └── logo.png                         # App logo
│── app.py                               # Streamlit app
│── requirements.txt                     # Dependencies
│── README.md                            # Project documentation
```

---

## ⚙️ Installation & Setup

1. **Clone the repository**
```bash
git clone https://github.com/your-username/obesity-detector.git
cd obesity-detector
```

2. **Create a virtual environment**
```
python3 -m venv venv
source venv/bin/activate   # Linux/macOS
venv\Scripts\activate      # Windows
```

3. **Install dependencies**
```
pip install -r requirements.txt
```

4. **Run the app**
```
streamlit run app.py
```

---

## 📊 Usage
- Launch the app in your browser (default: http://localhost:8501).
- Enter personal details:
```
- Age, Gender, Height, Weight, BMI, Physical Activity Level
```
- Click Predict Obesity Level.
- View:
```
- Prediction result (Normal / Underweight / Overweight / Obese)
- Emoji + message feedback
- Input summary
```
---

## 🧠 Model Information
- Algorithm: Deep Learning (TensorFlow/Keras)
- Training Dataset: Obesity dataset (CSV)
- Features: Age, Gender, Height, Weight, BMI, Physical Activity Level
- Accuracy: Depends on dataset and training configuration

---

## ⚠️ Disclaimer
- This project is for educational purposes only.
- It is not a substitute for professional medical advice, diagnosis, or treatment.
- Always consult a qualified healthcare provider for medical concerns.

---

## 🤝 Contributing
- Contributions are welcome!
 
1. Fork the repo
2. Create a feature branch (feature/new-ui)
3. Commit changes
4. Open a Pull Request

---

## 📜 License
- This project is licensed under the MIT License – feel free to use and modify.








