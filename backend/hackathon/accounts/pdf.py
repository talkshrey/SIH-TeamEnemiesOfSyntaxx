from reportlab.pdfgen import canvas
import json
import json2html
 
def json_to_pdf(json_data, file_name):
    data = json.loads(json_data)
    pdf_file = canvas.Canvas(file_name)
    y = 800
    for key, value in data.items():
        pdf_file.drawString(100, y, str(key))
        if(type(value) == dict):
            for i in value:
                pdf_file.drawString(120, y-30, str(i))
                y -= 10
        else:
            for i in range(len(value)):
                
                pdf_file.drawString(120, y-30, str(value[i]))
                y -= 10
        y -= 100
    pdf_file.save()

def json_to_html(json_data):
    # Load the json data into a dictionary
    data = json_data

    # Extract the user data
    user_email = data['User']['email']
    user_name = data['User']['name']

    # Extract the experience data
    experiences = data['Experience']
    experience_list = []
    for experience in experiences:
        experience_list.append(f"{experience['job_title']} at {experience['company_name']} from {experience['start_date']}")

    # Extract the education data
    educations = data['Education']
    education_list = []
    for education in educations:
        education_list.append(f"{education['institute']}: {education['degree']} in {education['study_field']}")

    # Build the resume
    resume = f"Resume:\n\nName: {user_name}\nEmail: {user_email}\n\nExperience:\n"
    for experience in experience_list:
        resume += f"- {experience}\n"
    resume += "\nEducation:\n"
    for education in education_list:
        resume += f"- {education}\n"

    return resume

