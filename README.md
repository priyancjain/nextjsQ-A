
````markdown
# 📄 Mini PDF QA App

A minimal **Next.js** application that allows users to upload PDFs, generate embeddings, and query them in natural language using an LLM.  

---

## 🚀 Features
- 📑 **PDF Upload & Parsing** – Extracts text from uploaded PDFs.  
- 🧠 **Embeddings** – Uses vector embeddings to store and search PDF content.  
- ❓ **Question Answering** – Ask natural language questions about the uploaded PDFs.  
- 💬 **Chat UI** – Interactive chat interface with message bubbles.  

---

## 📂 Project Structure
```bash
app/
├── api/ask/route.ts      # API route for answering questions
├── api/upload/route.ts   # API route for uploading PDFs
├── layout.tsx            # Root layout
├── page.tsx              # Main entry page

components/
├── FileUploader.tsx      # Upload UI component
├── MessageBubble.tsx     # Chat bubble component
├── QuestionBox.tsx       # Input box for asking questions

lib/
├── embeddings.ts         # Embedding generation logic
├── pdf.ts                # PDF parsing helpers
├── vector.ts             # Vector database operations
````

---

## ⚙️ Setup Instructions

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/mini-pdf-qa-app.git
   cd mini-pdf-qa-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root and add your OpenAI API key:

   ```env
   OPENAI_API_KEY=your_openai_api_key
   ```

4. **Run the development server**

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser 🎉

---

## 💡 Approach

1. **Upload & Extract** – Users upload PDFs via `FileUploader.tsx`, handled by `app/api/upload/route.ts`. The text is extracted using `lib/pdf.ts`.
2. **Embeddings & Storage** – Extracted text is converted into embeddings (`lib/embeddings.ts`) and stored in a vector store (`lib/vector.ts`).
3. **Querying** – When users ask questions (`QuestionBox.tsx`), the backend (`app/api/ask/route.ts`) retrieves relevant chunks from the vector DB and queries the LLM for an answer.
4. **Interactive UI** – Messages are displayed in a conversational format with `MessageBubble.tsx`.

---

## 📌 Tech Stack

* ⚛️ **Next.js 13+ (App Router)**
* 🔷 **TypeScript**
* 🎨 **TailwindCSS**
* 🤖 **OpenAI API**
* 📚 **Vector Search (for retrieval)**

---

## 🚀 Deployment (Vercel)

1. Push your project to GitHub.
2. Go to [Vercel](https://vercel.com/) and create a new project.
3. Import your GitHub repo.
4. Add your environment variable in **Vercel → Project Settings → Environment Variables**:

   ```
   OPENAI_API_KEY=your_openai_api_key
   ```
5. Deploy 🚀 — Vercel will build and host your app automatically.

---

## 📜 License

This project is licensed under the **MIT License**.

---

```

---

Would you like me to also add a **Demo / Screenshots** section with placeholders (so you can drop in images of your UI later), or keep it clean and minimal?
```
