
import re
import sys
from bs4 import BeautifulSoup

def check_get_element_by_id(html_content):
    # Parse the HTML content using BeautifulSoup
    soup = BeautifulSoup(html_content, 'html.parser')

    # Find all IDs in the HTML (including canvas)
    all_ids = {tag.get('id') for tag in soup.find_all(attrs={"id": True})}
    
    # Regular expression to find getElementById calls
    get_element_by_id_pattern = re.compile(r'getElementById\([\'"](\w+)[\'"]\)')
    
    # Find all getElementById() calls in the HTML content
    get_element_by_id_calls = get_element_by_id_pattern.findall(html_content)
    
    # Check if all IDs used in getElementById() calls are present in the HTML
    discrepancies = []
    for target_id in get_element_by_id_calls:
        if target_id not in all_ids:
            discrepancies.append(target_id)

    return discrepancies

def process_html_file(file_path):
    try:
        # Read the HTML file
        with open(file_path, 'r', encoding='utf-8') as file:
            html_content = file.read()

        # Check for discrepancies
        discrepancies = check_get_element_by_id(html_content)

        if discrepancies:
            print(f"The following IDs used in getElementById() calls are missing in {file_path}:")
            for id_ in discrepancies:
                print(f" - Missing ID: {id_}")
        else:
            print(f"All getElementById() calls in {file_path} reference valid IDs.")
    except FileNotFoundError:
        print(f"File {file_path} not found.")
    except Exception as e:
        print(f"An error occurred: {e}")

# Example usage
if __name__ == "__main__":
    file_path = sys.argv[1]  # Replace with your HTML file path
    process_html_file(file_path)

