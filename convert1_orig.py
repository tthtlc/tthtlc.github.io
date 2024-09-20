
import os

def generate_html(input_file, output_html):
    # Read the input file
    with open(input_file, 'r') as file:
        filenames = file.readlines()

    # Start HTML content
    html_content = """
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Files List</title>
        <style>
            body { font-family: Arial, sans-serif; margin: 20px; }
            a { display: block; margin-bottom: 10px; text-decoration: none; color: blue; }
            iframe { width: 100%; height: 500px; border: none; margin-top: 20px; }
        </style>
    </head>
    <body>
        <h1>Files</h1>
    """

    # Add each file as a link with an iframe
    for filename in filenames:
        filename = filename.strip()
        if filename:
            # Escape filename for safe HTML output
            safe_filename = filename.replace('"', '&quot;').replace("'", "&apos;")
            # Generate the HTML block for the link and iframe
            html_content += f"""
            <a href="{safe_filename}" target="frame_{safe_filename}">{filename}</a>
            <iframe name="frame_{safe_filename}" src="{safe_filename}"></iframe>
            """

    # Close the HTML tags
    html_content += """
    </body>
    </html>
    """

    # Write the HTML content to the output file
    with open(output_html, 'w') as html_file:
        html_file.write(html_content)
    print(f"Generated {output_html}")

# Example usage
input_file = 'file.txt'  # The input file containing filenames
output_html = 'output.html'  # The output HTML file

generate_html(input_file, output_html)

