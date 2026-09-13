
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time
import base64

# Set up Selenium WebDriver (ensure chromedriver is in your PATH or specify its path)
driver = webdriver.Chrome()

# Load the webpage
driver.get("file:///path/to/your/local/file.html")  # Replace with the actual file path

# Wait until the initial canvas is loaded
WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.TAG_NAME, "canvas")))

# Define a function to save a canvas to file with a unique filename
def save_canvas_image(canvas_index):
    # Run JavaScript to get canvas data
    canvas = driver.find_elements(By.TAG_NAME, "canvas")[canvas_index]
    image_data = driver.execute_script("return arguments[0].toDataURL('image/png');", canvas)
    
    # Extract base64 part and decode it
    image_data = image_data.split(",")[1]
    image_data = base64.b64decode(image_data)
    
    # Customize filename with canvas index
    filename = f"canvas_image_{canvas_index}.png"
    
    # Save to file
    with open(filename, "wb") as f:
        f.write(image_data)
    print(f"Saved {filename}")

# Scroll and save images in a loop
scroll_pause_time = 2  # Adjust this time as needed
canvas_count = 0

while True:
    # Save current canvas image with unique filename
    save_canvas_image(canvas_count)
    canvas_count += 1
    
    # Scroll down by simulating an arrow down keypress
    ActionChains(driver).send_keys(u'\ue015').perform()  # Arrow Down key
    
    # Pause to allow new content to load
    time.sleep(scroll_pause_time)
    
    # Break when there are no new canvases detected
    new_canvas_count = len(driver.find_elements(By.TAG_NAME, "canvas"))
    if new_canvas_count == canvas_count:
        break  # No new canvases were loaded, exit loop

# Close the browser
driver.quit()

