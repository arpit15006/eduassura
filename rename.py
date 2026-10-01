import os

def replace_in_files(directory, search_string, replace_string):
    for root, dirs, files in os.walk(directory):
        if 'node_modules' in dirs:
            dirs.remove('node_modules')
        if '.next' in dirs:
            dirs.remove('.next')
        if '.git' in dirs:
            dirs.remove('.git')
            
        for file in files:
            if not file.endswith(('.tsx', '.ts', '.json', '.md', '.txt')):
                continue
                
            file_path = os.path.join(root, file)
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                if search_string in content:
                    new_content = content.replace(search_string, replace_string)
                    with open(file_path, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    print(f"Updated: {file_path}")
            except Exception as e:
                print(f"Failed processing {file_path}: {e}")

if __name__ == '__main__':
    replace_in_files(r'd:\Projects\eduassura-main\eduassura-main', 'IQAC ERP', 'EduAssura')
