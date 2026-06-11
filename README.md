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
- **Next.js 14+ (App Router)**
- **TypeScript**
- **LangChain**
- **Vercel AI SDK (useChat)**
- **Ollama** (local LLM server)
- **ShadCN UI**
- **React Hooks**
- **Server‑Sent Events (SSE)** for streaming
- **TensorFlow / Keras** – Deep Learning model
- **Pandas / NumPy** – Data handling
- **CSV Dataset** – Obesity data (age, gender, height, weight, BMI, activity level)

---


## 📂 Project Structure
```
ai-rag-langchain-nextjs/
│── app/
│   ├── api/
│   │   ├── chat/
│   │   │   └── route.ts          # Main chat endpoint
│   │   ├── ex1/
│   │   │   └── route.ts          # Basic streaming example
│   │   ├── ex2/
│   │   │   └── route.ts          # Comedian persona + memory
│   │   ├── ex3/
│   │   │   └── route.ts          # Pirate persona + verbose dialect
│   │   └── ex4/
│   │       └── route.ts          # Clean minimal pipeline
│   └── page.tsx                  # App entry
│
│── components/
│   └── chat.tsx                  # Chat UI (useChat hook)
│
│── public/
│── package.json
│── README.md

```

---

## ⚙️ Installation & Setup

1. **Clone the repository**
```bash
git clone https://github.com/ex-rnd/ai-rag-langchain-nextjs.git
cd ai-rag-langchain-nextjs
```

2. **Install dependencies**
```
npm install
```

3. **Install and run Ollama**
Download Ollama:
https://ollama.com/download

Then pull a model:
```
ollama pull qwen2.5:0.5b
```
Or Mistral:
```
ollama pull mistral
```

4. **Set environment variables**
Create `.env.local`:
```
OLLAMA_URL=http://localhost:11434/v1
```

5. **Set environment variables**
```
npm run dev
```

---


## 📊 Usage
- Open the app at:
```http://localhost:3000```
- Type a message in the chat box
- Watch the AI respond token‑by‑token
- 
### 🔀 Switch API Routes
| Route        | Description               |
|--------------|---------------------------|
| `/api/ex1`   | Basic streaming           |
| `/api/ex2`   | Comedian persona          |
| `/api/ex3`   | Pirate persona            |
| `/api/chat`  | Main production route     |

---


## 🧠 How It Works
- Each API route uses a LangChain pipeline:
```
User Message
   ↓
PromptTemplate
   ↓
ChatOpenAI (Ollama)
   ↓
HttpResponseOutputParser
   ↓
StreamingTextResponse
   ↓
Frontend (useChat)

```

### Example: Persona Prompt (ex2)
```
You are a comedian. You have witty replies to user questions.

Current conversation:
{chat_history}

user: {input}
assistant:

```



### Example: Persona Prompt (ex3)
```
You are a pirate named Patchy. All responses must be extremely verbose and in pirate dialect.

Current conversation:
{chat_history}

user: {input}
assistant:

```


### Example: Persona Prompt (ex4)
```
{message}

```





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








