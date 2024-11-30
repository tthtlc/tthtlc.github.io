
To retrieve tweets without using the Tweepy library, you can directly interact with the **Twitter API v2** using Python's `requests` library. Here's how you can do it:

---

### Prerequisites
1. **Twitter Developer Account**: Obtain your Bearer Token by creating an application on the [Twitter Developer Portal](https://developer.twitter.com).
2. **Install `requests`**:
   ```bash
   pip install requests
   ```

---

### Script
```python
import requests
import json

# Replace this with your Bearer Token
BEARER_TOKEN = "your_bearer_token"

def create_headers(bearer_token):
    """
    Create headers for Twitter API request.
    """
    headers = {
        "Authorization": f"Bearer {bearer_token}"
    }
    return headers

def get_user_id(username, headers):
    """
    Get the User ID of the username.
    """
    url = f"https://api.twitter.com/2/users/by/username/{username}"
    response = requests.get(url, headers=headers)
    
    if response.status_code == 200:
        return response.json()["data"]["id"]
    else:
        print(f"Error: Unable to fetch user ID. {response.json()}")
        return None

def fetch_tweets(user_id, headers, max_results=100):
    """
    Fetch tweets for the given user ID.
    """
    url = f"https://api.twitter.com/2/users/{user_id}/tweets"
    params = {
        "max_results": max_results,  # Max number of tweets per request (up to 100)
        "tweet.fields": "created_at,text",  # Specify the fields you want
    }
    
    tweets = []
    while True:
        response = requests.get(url, headers=headers, params=params)
        
        if response.status_code == 200:
            data = response.json()
            tweets.extend(data["data"])
            
            # Check if there is more data
            if "next_token" in data.get("meta", {}):
                params["pagination_token"] = data["meta"]["next_token"]
            else:
                break
        else:
            print(f"Error fetching tweets: {response.json()}")
            break
    
    return tweets

def save_to_file(tweets, output_file="tweets.json"):
    """
    Save tweets to a JSON file.
    """
    with open(output_file, "w", encoding="utf-8") as f:
        json.dump(tweets, f, ensure_ascii=False, indent=4)
    print(f"Saved {len(tweets)} tweets to {output_file}.")

def download_tweets(username):
    """
    Main function to download tweets of a given user.
    """
    headers = create_headers(BEARER_TOKEN)
    user_id = get_user_id(username, headers)
    
    if user_id:
        print(f"User ID for @{username}: {user_id}")
        tweets = fetch_tweets(user_id, headers)
        save_to_file(tweets)
    else:
        print("Failed to fetch tweets.")

if __name__ == "__main__":
    username = input("Enter the Twitter username (without @): ")
    download_tweets(username)
```

---

### How It Works
1. **Authenticate**: 
   - The script uses your Bearer Token for authentication.
2. **User ID Lookup**: 
   - The Twitter API requires a User ID to fetch tweets. This is fetched using the `GET /2/users/by/username/{username}` endpoint.
3. **Fetching Tweets**: 
   - The script uses the `GET /2/users/{id}/tweets` endpoint to fetch tweets.
   - `max_results` is set to 100 to retrieve the maximum number of tweets per request.
   - If there are more tweets, the script uses `pagination_token` to get additional pages.
4. **Saving Data**:
   - Tweets are saved in `tweets.json`.

---

### API Rate Limits
- The `GET /2/users/{id}/tweets` endpoint has a rate limit of **900 requests per 15 minutes**.
- Each request fetches up to 100 tweets.

---

### Example Output
The tweets will be saved as JSON:
```json
[
    {
        "id": "1234567890123456789",
        "text": "This is a sample tweet.",
        "created_at": "2024-01-01T12:34:56.000Z"
    },
    {
        "id": "9876543210987654321",
        "text": "Another example tweet.",
        "created_at": "2024-01-02T15:00:00.000Z"
    }
]
```

---

### Notes
1. **Pagination**: The script handles pagination with `pagination_token`.
2. **Fields**: You can customize the fields returned (e.g., `tweet.fields`, `user.fields`).
3. **Error Handling**: The script checks for API errors and prints details if requests fail.

Let me know if you need further help or enhancements!
