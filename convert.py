
import os

# Function to generate HTML content for each file
def generate_html(filename):
    # Read the content of the file
    with open(filename, 'r') as file:
        file_content = file.read()

    # Generate the HTML content
    html_content = f"""
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>{filename}</title>
    </head>
    <body>
        <h1>File: {filename}</h1>
        <a href="{filename}">{filename}</a>
        <iframe srcdoc="{file_content.replace('"', '&quot;').replace("'", "&apos;")}" 
                style="width:100%; height:500px; border:none;">
        </iframe>
    </body>
    </html>
    """
    
    # Save the HTML content to a new file
    html_filename = f"{os.path.splitext(filename)[0]}.html"
    with open(html_filename, 'w') as html_file:
        html_file.write(html_content)
    print(f"Generated: {html_filename}")

# Main function to process the input file containing filenames
def process_input_file(input_file):
    with open(input_file, 'r') as file:
        filenames = file.readlines()
    
    # Strip whitespace characters like \n at the end of each line
    filenames = [f.strip() for f in filenames]
    
    # Generate HTML files for each filename
    for filename in filenames:
        if os.path.exists(filename):
            generate_html(filename)
        else:
            print(f"File not found: {filename}")

# Example usage
input_file = 'file.txt'  # The file containing the list of filenames
process_input_file(input_file)

