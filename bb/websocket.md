Here are 10 different examples of WebSocket implementations across various scenarios developers often encounter:

---

### **1. Chat Application**
WebSockets are ideal for real-time messaging. Clients establish a persistent connection to exchange messages.

```javascript
const ws = new WebSocket("ws://example.com/chat");

ws.onopen = () => {
  ws.send(JSON.stringify({ type: "message", content: "Hello, World!" }));
};

ws.onmessage = (event) => {
  const message = JSON.parse(event.data);
  console.log(`New message: ${message.content}`);
};
```

---

### **2. Stock Market Ticker**
Real-time stock price updates use WebSockets to stream continuously changing data.

```javascript
const ws = new WebSocket("wss://example.com/stocks");

ws.onmessage = (event) => {
  const stockData = JSON.parse(event.data);
  console.log(`Stock: ${stockData.symbol}, Price: ${stockData.price}`);
};
```

---

### **3. Multiplayer Game**
WebSockets enable synchronized gameplay by sending game state updates between players and the server.

```javascript
const ws = new WebSocket("ws://example.com/game");

ws.onmessage = (event) => {
  const gameState = JSON.parse(event.data);
  console.log("Game State Updated:", gameState);
};

// Sending player's move
ws.send(JSON.stringify({ action: "move", direction: "up" }));
```

---

### **4. Collaborative Document Editing**
Apps like Google Docs use WebSockets to update changes made by users in real time.

```javascript
const ws = new WebSocket("ws://example.com/editor");

ws.onmessage = (event) => {
  const update = JSON.parse(event.data);
  console.log("Received Update:", update);
};

// Sending a user's edit
ws.send(JSON.stringify({ action: "edit", content: "New Text" }));
```

---

### **5. Real-Time Notifications**
Web applications send notifications using WebSockets for instant alerts.

```javascript
const ws = new WebSocket("ws://example.com/notifications");

ws.onmessage = (event) => {
  const notification = JSON.parse(event.data);
  alert(`New Notification: ${notification.message}`);
};
```

---

### **6. IoT Device Monitoring**
WebSockets enable live status updates from IoT devices.

```javascript
const ws = new WebSocket("ws://example.com/devices");

ws.onmessage = (event) => {
  const deviceStatus = JSON.parse(event.data);
  console.log(`Device ${deviceStatus.id} is ${deviceStatus.status}`);
};
```

---

### **7. Live Sports Updates**
WebSockets power live scoreboards or commentary for sports events.

```javascript
const ws = new WebSocket("ws://example.com/sports");

ws.onmessage = (event) => {
  const matchUpdate = JSON.parse(event.data);
  console.log(`Score Update: ${matchUpdate.teamA} ${matchUpdate.scoreA} - ${matchUpdate.scoreB} ${matchUpdate.teamB}`);
};
```

---

### **8. Financial Dashboard**
Real-time updates for dashboards with analytics or transactions.

```javascript
const ws = new WebSocket("wss://example.com/finance");

ws.onmessage = (event) => {
  const transaction = JSON.parse(event.data);
  console.log(`Transaction Update: ${transaction.id} - $${transaction.amount}`);
};
```

---

### **9. Remote Control for Devices**
WebSockets can be used for controlling devices remotely, such as drones or lights.

```javascript
const ws = new WebSocket("ws://example.com/device-control");

// Sending a control command
ws.send(JSON.stringify({ device: "light", action: "toggle" }));

ws.onmessage = (event) => {
  console.log(`Device Response: ${event.data}`);
};
```

---

### **10. Real-Time Data Visualization**
WebSockets stream live data to render visualizations, such as temperature or network metrics.

```javascript
const ws = new WebSocket("wss://example.com/metrics");

ws.onmessage = (event) => {
  const metric = JSON.parse(event.data);
  updateGraph(metric.timestamp, metric.value);
};
```

---

These examples demonstrate the versatility of WebSockets in building interactive, real-time applications across different domains.
