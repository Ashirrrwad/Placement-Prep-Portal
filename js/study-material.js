/**
 * js/study-material.js — Comprehensive Placement Preparation Study Bank
 * Interactive Study Modal Drawer with concept notes, complexity analysis, interview patterns, and code samples in C++, Java, Python, JS.
 */

export const STUDY_MATERIALS = {
  "arrays": {
    title: "Arrays & Two Pointers",
    icon: "🧮",
    category: "Data Structures",
    summary: "Master contiguous memory allocation, two pointers, sliding window, and Kadane's algorithm.",
    complexity: [
      { op: "Access element by index", time: "O(1)", space: "O(1)" },
      { op: "Search element (Unsorted)", time: "O(n)", space: "O(1)" },
      { op: "Search element (Sorted Binary Search)", time: "O(log n)", space: "O(1)" },
      { op: "Insert / Delete (at arbitrary index)", time: "O(n)", space: "O(1)" }
    ],
    patterns: [
      {
        name: "Two Pointers Pattern",
        desc: "Use two pointers moving towards each other (e.g. sorted array 2-Sum) or in the same direction (e.g. removing duplicates)."
      },
      {
        name: "Sliding Window Pattern",
        desc: "Maintain a dynamic window [L, R] over an array to solve subarray sum/length problems in O(n) time instead of O(n²)."
      },
      {
        name: "Kadane's Algorithm (Max Subarray Sum)",
        desc: "Keep track of current running sum. If running sum becomes negative, reset it to 0."
      }
    ],
    code: {
      python: `def maxSubArray(nums):
    max_sum = current_sum = nums[0]
    for x in nums[1:]:
        current_sum = max(x, current_sum + x)
        max_sum = max(max_sum, current_sum)
    return max_sum`,
      cpp: `int maxSubArray(vector<int>& nums) {
    int maxSum = nums[0], currentSum = nums[0];
    for(int i = 1; i < nums.size(); ++i) {
        currentSum = max(nums[i], currentSum + nums[i]);
        maxSum = max(maxSum, currentSum);
    }
    return maxSum;
}`,
      java: `public int maxSubArray(int[] nums) {
    int maxSum = nums[0], currentSum = nums[0];
    for (int i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
}`,
      javascript: `function maxSubArray(nums) {
    let maxSum = nums[0], currentSum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
}`
    },
    topQuestions: [
      { title: "Two Sum (LeetCode #1)", diff: "Easy", link: "#topic-arrays" },
      { title: "Maximum Subarray — Kadane's Algorithm (#53)", diff: "Medium", link: "#topic-arrays" },
      { title: "Container With Most Water (#11)", diff: "Medium", link: "#topic-arrays" },
      { title: "Trapping Rain Water (#42)", diff: "Hard", link: "#topic-arrays" }
    ]
  },

  "linkedlist": {
    title: "Linked Lists",
    icon: "🔗",
    category: "Data Structures",
    summary: "Singly and Doubly Linked Lists, Fast & Slow Pointers (Floyd's Cycle Detection), reversing linked lists, and LRU Cache.",
    complexity: [
      { op: "Access element by index", time: "O(n)", space: "O(1)" },
      { op: "Insert at head", time: "O(1)", space: "O(1)" },
      { op: "Insert at tail (with tail pointer)", time: "O(1)", space: "O(1)" },
      { op: "Delete node given pointer", time: "O(1)", space: "O(1)" }
    ],
    patterns: [
      {
        name: "Fast & Slow Pointer (Floyd's Tortoise & Hare)",
        desc: "Move slow pointer 1 step and fast pointer 2 steps. If they meet, a cycle exists!"
      },
      {
        name: "In-Place Linked List Reversal",
        desc: "Maintain prev, curr, next pointers to reverse list direction in O(n) time and O(1) space."
      }
    ],
    code: {
      python: `def reverseList(head):
    prev, curr = None, head
    while curr:
        nxt = curr.next
        curr.next = prev
        prev = curr
        curr = nxt
    return prev`,
      cpp: `ListNode* reverseList(ListNode* head) {
    ListNode *prev = nullptr, *curr = head;
    while (curr) {
        ListNode* nxt = curr->next;
        curr->next = prev;
        prev = curr;
        curr = nxt;
    }
    return prev;
}`,
      java: `public ListNode reverseList(ListNode head) {
    ListNode prev = null, curr = head;
    while (curr != null) {
        ListNode nxt = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nxt;
    }
    return prev;
}`,
      javascript: `function reverseList(head) {
    let prev = null, curr = head;
    while (curr) {
        let nxt = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nxt;
    }
    return prev;
}`
    },
    topQuestions: [
      { title: "Reverse Linked List (#206)", diff: "Easy", link: "#topic-linkedlist" },
      { title: "Linked List Cycle Detection (#141)", diff: "Easy", link: "#topic-linkedlist" },
      { title: "Merge Two Sorted Lists (#21)", diff: "Easy", link: "#topic-linkedlist" },
      { title: "LRU Cache (#146)", diff: "Hard", link: "#topic-linkedlist" }
    ]
  },

  "binarytrees": {
    title: "Binary Trees & BST",
    icon: "🌳",
    category: "Data Structures",
    summary: "Tree traversals (DFS Inorder, Preorder, Postorder & BFS Level Order), BST properties, LCA, and Tree Height & Diameter.",
    complexity: [
      { op: "BST Search (Balanced)", time: "O(log n)", space: "O(log n)" },
      { op: "BST Search (Unbalanced)", time: "O(n)", space: "O(n)" },
      { op: "Tree Traversal (all nodes)", time: "O(n)", space: "O(h)" }
    ],
    patterns: [
      {
        name: "Depth First Search (DFS)",
        desc: "Inorder (Left-Node-Right) gives sorted order for BST. Preorder (Node-Left-Right) copies trees. Postorder (Left-Right-Node) deletes nodes."
      },
      {
        name: "Breadth First Search (BFS)",
        desc: "Use a Queue to process tree nodes level by level."
      }
    ],
    code: {
      python: `def levelOrder(root):
    if not root: return []
    res, queue = [], [root]
    while queue:
        level = []
        for _ in range(len(queue)):
            node = queue.pop(0)
            level.append(node.val)
            if node.left: queue.append(node.left)
            if node.right: queue.append(node.right)
        res.append(level)
    return res`,
      cpp: `vector<vector<int>> levelOrder(TreeNode* root) {
    vector<vector<int>> res;
    if(!root) return res;
    queue<TreeNode*> q; q.push(root);
    while(!q.empty()) {
        int sz = q.size(); vector<int> level;
        for(int i=0; i<sz; ++i) {
            TreeNode* node = q.front(); q.pop();
            level.push_back(node->val);
            if(node->left) q.push(node->left);
            if(node->right) q.push(node->right);
        }
        res.push_back(level);
    }
    return res;
}`,
      java: `public List<List<Integer>> levelOrder(TreeNode root) {
    List<List<Integer>> res = new ArrayList<>();
    if (root == null) return res;
    Queue<TreeNode> q = new LinkedList<>();
    q.add(root);
    while (!q.isEmpty()) {
        int sz = q.size();
        List<Integer> level = new ArrayList<>();
        for (int i = 0; i < sz; i++) {
            TreeNode node = q.poll();
            level.add(node.val);
            if (node.left != null) q.add(node.left);
            if (node.right != null) q.add(node.right);
        }
        res.add(level);
    }
    return res;
}`,
      javascript: `function levelOrder(root) {
    if (!root) return [];
    let res = [], q = [root];
    while (q.length) {
        let sz = q.length, level = [];
        for (let i = 0; i < sz; i++) {
            let node = q.shift();
            level.push(node.val);
            if (node.left) q.push(node.left);
            if (node.right) q.push(node.right);
        }
        res.push(level);
    }
    return res;
}`
    },
    topQuestions: [
      { title: "Binary Tree Inorder Traversal (#94)", diff: "Easy", link: "#topic-binarytrees" },
      { title: "Lowest Common Ancestor in Tree (#236)", diff: "Medium", link: "#topic-binarytrees" },
      { title: "Validate Binary Search Tree (#98)", diff: "Medium", link: "#topic-bst" },
      { title: "Serialize and Deserialize Binary Tree (#297)", diff: "Hard", link: "#topic-binarytrees" }
    ]
  },

  "graphs": {
    title: "Graph Algorithms",
    icon: "🔵",
    category: "Algorithms",
    summary: "Graph representations, BFS & DFS, Dijkstra's Shortest Path, Topological Sort, and Kruskal's/Prim's Minimum Spanning Tree.",
    complexity: [
      { op: "BFS / DFS Traversal", time: "O(V + E)", space: "O(V)" },
      { op: "Dijkstra's Algorithm (Min Heap)", time: "O((V + E) log V)", space: "O(V)" },
      { op: "Topological Sort (Kahn's Algorithm)", time: "O(V + E)", space: "O(V)" }
    ],
    patterns: [
      {
        name: "Dijkstra's Shortest Path",
        desc: "Greedy algorithm using Priority Queue to find shortest path from single source in non-negative weighted graphs."
      },
      {
        name: "Topological Sort",
        desc: "Linear ordering of vertices in a Directed Acyclic Graph (DAG) such that for every edge u -> v, u comes before v."
      }
    ],
    code: {
      python: `import heapq

def dijkstra(graph, start, num_nodes):
    dist = [float('inf')] * num_nodes
    dist[start] = 0
    pq = [(0, start)]
    
    while pq:
        d, u = heapq.heappop(pq)
        if d > dist[u]: continue
        
        for v, weight in graph[u]:
            if dist[u] + weight < dist[v]:
                dist[v] = dist[u] + weight
                heapq.heappush(pq, (dist[v], v))
    return dist`,
      cpp: `vector<int> dijkstra(vector<vector<pair<int,int>>>& adj, int start, int n) {
    vector<int> dist(n, 1e9);
    dist[start] = 0;
    priority_queue<pair<int,int>, vector<pair<int,int>>, greater<pair<int,int>>> pq;
    pq.push({0, start});
    while(!pq.empty()) {
        auto [d, u] = pq.top(); pq.pop();
        if(d > dist[u]) continue;
        for(auto& edge : adj[u]) {
            int v = edge.first, w = edge.second;
            if(dist[u] + w < dist[v]) {
                dist[v] = dist[u] + w;
                pq.push({dist[v], v});
            }
        }
    }
    return dist;
}`,
      java: `public int[] dijkstra(List<List<int[]>> adj, int start, int n) {
    int[] dist = new int[n];
    Arrays.fill(dist, (int)1e9);
    dist[start] = 0;
    PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> a[0] - b[0]);
    pq.add(new int[]{0, start});
    while (!pq.isEmpty()) {
        int[] curr = pq.poll();
        int d = curr[0], u = curr[1];
        if (d > dist[u]) continue;
        for (int[] edge : adj.get(u)) {
            int v = edge[0], w = edge[1];
            if (dist[u] + w < dist[v]) {
                dist[v] = dist[u] + w;
                pq.add(new int[]{dist[v], v});
            }
        }
    }
    return dist;
}`,
      javascript: `function dijkstra(adj, start, n) {
    let dist = new Array(n).fill(Infinity);
    dist[start] = 0;
    let pq = [[0, start]];
    while (pq.length) {
        pq.sort((a,b) => a[0] - b[0]);
        let [d, u] = pq.shift();
        if (d > dist[u]) continue;
        for (let [v, w] of (adj[u] || [])) {
            if (dist[u] + w < dist[v]) {
                dist[v] = dist[u] + w;
                pq.push([dist[v], v]);
            }
        }
    }
    return dist;
}`
    },
    topQuestions: [
      { title: "Number of Islands (#200)", diff: "Medium", link: "#topic-graphs" },
      { title: "Course Schedule I & II (#207)", diff: "Medium", link: "#topic-graphs" },
      { title: "Network Delay Time — Dijkstra (#743)", diff: "Medium", link: "#topic-graphs" },
      { title: "Alien Dictionary (#269)", diff: "Hard", link: "#topic-graphs" }
    ]
  },

  "os_dbms_networks": {
    title: "CS Fundamentals (OS, DBMS, Networks)",
    icon: "⚙️",
    category: "CS Core",
    summary: "Essential theory concepts asked in technical rounds at Amazon, Google, Microsoft, and TCS.",
    complexity: [
      { op: "OS: Process vs Thread", time: "Process has isolated memory; Threads share process memory.", space: "Context switch: Process > Thread" },
      { op: "DBMS: 1NF to 3NF & BCNF", time: "Removes atomic, partial, and transitive dependencies.", space: "Minimizes data redundancy" },
      { op: "Networks: TCP vs UDP", time: "TCP = Reliable 3-Way Handshake; UDP = Fast Connectionless", space: "Header: TCP 20B, UDP 8B" }
    ],
    patterns: [
      {
        name: "Operating Systems Core",
        desc: "Process States, CPU Scheduling (FCFS, SJF, Round Robin), Deadlock 4 Conditions (Mutual Exclusion, Hold & Wait, No Preemption, Circular Wait), Semaphore vs Mutex."
      },
      {
        name: "Database Management Systems",
        desc: "ACID properties, Primary vs Foreign Keys, SQL Joins (Inner, Left, Right, Full Outer), Indexing (B-Tree), Normalization."
      },
      {
        name: "Computer Networks",
        desc: "OSI 7 Layers vs TCP/IP 4 Layers, HTTP status codes (200 OK, 404 Not Found, 500 Server Error), DNS Resolution, HTTPS SSL/TLS handshake."
      }
    ],
    code: {
      python: `-- SQL Interview Queries Cheat Sheet:
-- 1. Find 2nd Highest Salary:
SELECT MAX(salary) FROM Employees 
WHERE salary < (SELECT MAX(salary) FROM Employees);

-- 2. Find duplicate emails:
SELECT email FROM Users 
GROUP BY email HAVING COUNT(email) > 1;

-- 3. INNER JOIN Employees and Departments:
SELECT e.name, d.dept_name 
FROM Employees e 
INNER JOIN Departments d ON e.dept_id = d.id;`,
      cpp: `// C++ Thread Example (Multithreading in OS):
#include <iostream>
#include <thread>

void printMessage() {
    std::cout << "Thread execution running concurrently!" << std::endl;
}

int main() {
    std::thread t(printMessage);
    t.join(); // Wait for thread to finish
    return 0;
}`,
      java: `// Java Synchronization (Mutex / Thread Safety):
class Counter {
    private int count = 0;
    public synchronized void increment() {
        count++;
    }
    public int getCount() { return count; }
}`,
      javascript: `// Node.js Event Loop / Asynchronous I/O Simulation:
async function fetchUserData() {
    try {
        const response = await fetch('https://api.example.com/user');
        const data = await response.json();
        console.log("User data received:", data);
    } catch (err) {
        console.error("Network request failed:", err);
    }
}`
    },
    topQuestions: [
      { title: "Quiz Arena — Test CS Fundamentals MCQs", diff: "All", link: "#quiz" },
      { title: "Resources — Placement Preparation Cheat Sheets", diff: "All", link: "#resources" }
    ]
  }
};

/**
 * Open Study Modal Drawer
 */
export function openStudyModal(topicKey) {
  const data = STUDY_MATERIALS[topicKey] || STUDY_MATERIALS["arrays"];
  let modal = document.getElementById("studyMaterialModal");

  if (!modal) {
    modal = document.createElement("div");
    modal.id = "studyMaterialModal";
    modal.className = "study-modal-overlay";
    document.body.appendChild(modal);
  }

  modal.innerHTML = `
    <div class="study-modal-container">
      <div class="study-modal-header">
        <div style="display:flex;align-items:center;gap:0.75rem;">
          <span style="font-size:1.75rem;">${data.icon}</span>
          <div>
            <span class="badge badge-easy" style="font-size:0.75rem;">${data.category}</span>
            <h2 style="font-size:1.35rem;margin-top:0.2rem;">${data.title}</h2>
          </div>
        </div>
        <button class="study-modal-close" id="closeStudyModal">&times;</button>
      </div>

      <div class="study-modal-body">
        <p class="study-summary">${data.summary}</p>

        <!-- Complexity Table -->
        <h3 class="study-section-title">⏱️ Complexity Analysis</h3>
        <div class="study-table-wrap">
          <table class="study-table">
            <thead>
              <tr><th>Operation / Concept</th><th>Time Complexity</th><th>Space Complexity</th></tr>
            </thead>
            <tbody>
              ${data.complexity.map(c => `
                <tr>
                  <td><strong>${c.op}</strong></td>
                  <td><span class="badge badge-medium">${c.time}</span></td>
                  <td><span class="badge badge-easy">${c.space}</span></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>

        <!-- Key Interview Patterns -->
        <h3 class="study-section-title" style="margin-top:1.5rem;">💡 Key Interview Patterns</h3>
        <div class="study-patterns-grid">
          ${data.patterns.map(p => `
            <div class="study-pattern-card">
              <h4>${p.name}</h4>
              <p>${p.desc}</p>
            </div>
          `).join('')}
        </div>

        <!-- Multi-language Code Templates -->
        <h3 class="study-section-title" style="margin-top:1.5rem;">💻 Implementation Examples</h3>
        <div class="code-tabs-header">
          <button class="code-tab active" data-lang="python">Python 3</button>
          <button class="code-tab" data-lang="cpp">C++ 20</button>
          <button class="code-tab" data-lang="java">Java 17</button>
          <button class="code-tab" data-lang="javascript">JavaScript</button>
        </div>
        <div class="code-tab-body">
          <pre><code id="studyCodeBlock">${data.code.python}</code></pre>
        </div>

        <!-- Top Recommended Interview Questions -->
        <h3 class="study-section-title" style="margin-top:1.5rem;">🎯 Top Recommended Interview Problems</h3>
        <div class="study-questions-list">
          ${data.topQuestions.map(q => `
            <div class="study-q-item">
              <span>${q.title}</span>
              <div style="display:flex;align-items:center;gap:0.5rem;">
                <span class="badge badge-${q.diff.toLowerCase()}">${q.diff}</span>
                <a href="${q.link}" class="btn btn-secondary" onclick="document.getElementById('studyMaterialModal').classList.remove('open')" style="padding:0.3rem 0.6rem;font-size:0.78rem;text-decoration:none;">Solve</a>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;

  modal.classList.add("open");

  // Close Listener
  document.getElementById("closeStudyModal").addEventListener("click", () => {
    modal.classList.remove("open");
  });

  // Code Language Tab Switcher
  const tabs = modal.querySelectorAll(".code-tab");
  const codeBlock = modal.querySelector("#studyCodeBlock");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      const lang = tab.dataset.lang;
      codeBlock.textContent = data.code[lang] || data.code.python;
    });
  });
}
