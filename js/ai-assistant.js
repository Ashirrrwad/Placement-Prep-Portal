/**
 * js/ai-assistant.js — Prep Mate AI Placement Assistant Widget
 * Floating chatbot offering instant explanation for DSA concepts, code solutions, OS/DBMS theory, and interview strategies.
 */

export function initAIAssistant() {
  let widget = document.getElementById("aiWidgetWrap");
  if (widget) return;

  widget = document.createElement("div");
  widget.id = "aiWidgetWrap";
  widget.className = "ai-widget-wrap";

  widget.innerHTML = `
    <!-- Floating Trigger Button -->
    <button class="ai-trigger-btn" id="aiTriggerBtn" title="Ask Prep Mate AI Assistant">
      <span class="ai-pulse"></span>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a10 10 0 0 1 10 10c0 5.523-4.477 10-10 10S2 17.523 2 12A10 10 0 0 1 12 2z"/><path d="M12 8v4l3 3"/></svg>
      <span class="ai-btn-text">Prep Mate AI</span>
    </button>

    <!-- Chat Drawer Container -->
    <div class="ai-chat-drawer" id="aiChatDrawer">
      <div class="ai-chat-header">
        <div style="display:flex;align-items:center;gap:0.6rem;">
          <div class="ai-avatar">🤖</div>
          <div>
            <h3 style="font-size:0.95rem;margin:0;font-weight:700;">Prep Mate AI</h3>
            <span style="font-size:0.7rem;color:var(--green);display:flex;align-items:center;gap:0.3rem;">
              <span style="width:6px;height:6px;border-radius:50%;background:var(--green);display:inline-block;"></span> Online Placement Assistant
            </span>
          </div>
        </div>
        <button class="study-modal-close" id="closeAIChat">&times;</button>
      </div>

      <div class="ai-chat-messages" id="aiMessages">
        <div class="ai-msg bot">
          👋 Hi there! I'm <strong>Prep Mate</strong>, your AI Placement Assistant. Ask me anything about Data Structures, Algorithms, OS, DBMS, or technical interview questions!
        </div>
      </div>

      <!-- Quick Prompt Chips -->
      <div class="ai-quick-prompts">
        <button class="ai-prompt-chip" data-q="Explain Kadane's Algorithm for max subarray sum">🧠 Kadane's Algorithm</button>
        <button class="ai-prompt-chip" data-q="Explain Process vs Thread in OS with interview example">⚙️ Process vs Thread</button>
        <button class="ai-prompt-chip" data-q="What are top 5 DSA topics for Amazon SDE interviews?">🎯 Amazon SDE Prep</button>
      </div>

      <!-- Input Bar -->
      <form class="ai-chat-input-wrap" id="aiChatForm">
        <input type="text" id="aiInput" placeholder="Ask a placement or coding question..." autocomplete="off" />
        <button type="submit" class="ai-send-btn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
        </button>
      </form>
    </div>
  `;

  document.body.appendChild(widget);

  const triggerBtn = document.getElementById("aiTriggerBtn");
  const drawer = document.getElementById("aiChatDrawer");
  const closeBtn = document.getElementById("closeAIChat");
  const form = document.getElementById("aiChatForm");
  const input = document.getElementById("aiInput");
  const messages = document.getElementById("aiMessages");

  triggerBtn.addEventListener("click", () => drawer.classList.toggle("open"));
  closeBtn.addEventListener("click", () => drawer.classList.remove("open"));

  function appendMessage(sender, text) {
    const div = document.createElement("div");
    div.className = `ai-msg ${sender}`;
    div.innerHTML = text;
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
  }

  function handleQuestion(q) {
    appendMessage("user", q);

    setTimeout(() => {
      let reply = "";
      const qLower = q.toLowerCase();

      if (qLower.includes("kadane")) {
        reply = `<strong>Kadane's Algorithm (Max Subarray Sum):</strong><br><br>` +
          `It finds the maximum contiguous subarray sum in <code>O(n)</code> time using dynamic programming.<br><br>` +
          `<code>curr_sum = max(x, curr_sum + x)<br>max_sum = max(max_sum, curr_sum)</code><br><br>` +
          `💡 <em>Interview Tip:</em> Mention that if all numbers are negative, the algorithm correctly returns the largest single negative number!`;
      } else if (qLower.includes("process") || qLower.includes("thread")) {
        reply = `<strong>Process vs Thread Breakdown:</strong><br><br>` +
          `• <strong>Process:</strong> Independent execution unit with its own address space & memory block.<br>` +
          `• <strong>Thread:</strong> Lightweight sub-unit inside a process sharing code, data, and OS resources.<br><br>` +
          `⚡ <em>Context Switch:</em> Thread switching is significantly faster than process switching!`;
      } else if (qLower.includes("amazon") || qLower.includes("sde")) {
        reply = `<strong>Top Amazon SDE Interview Focus Areas:</strong><br><br>` +
          `1. <strong>Arrays & Sliding Window:</strong> Two Sum, Trapping Rain Water.<br>` +
          `2. <strong>Trees & BST:</strong> Lowest Common Ancestor, Level Order Traversal.<br>` +
          `3. <strong>Graph BFS/DFS:</strong> Number of Islands, Word Ladder.<br>` +
          `4. <strong>System Design & LPK:</strong> Leadership Principles + LRU Cache design.`;
      } else {
        reply = `Great question! For <strong>${q}</strong>, I recommend opening our <a href="#dsa" onclick="document.getElementById('aiChatDrawer').classList.remove('open')">Topic Library</a> or taking the <a href="#quiz" onclick="document.getElementById('aiChatDrawer').classList.remove('open')">Quiz Arena</a> test to practice this concept with detailed complexity analysis and code examples!`;
      }

      appendMessage("bot", reply);
    }, 450);
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const val = input.value.trim();
    if (!val) return;
    input.value = "";
    handleQuestion(val);
  });

  document.querySelectorAll(".ai-prompt-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      handleQuestion(chip.dataset.q);
    });
  });
}
