# School Management System

A comprehensive web application built with Next.js and MySQL for managing school information. The system allows users to add new schools with detailed information and browse existing schools in an ecommerce-style layout.

## Features

- **Add School Page**: Form to input and store school data with validation
- **Show Schools Page**: Display schools in a responsive grid layout with search and filters
- **Image Upload**: Store school images in the `schoolImages` folder
- **Responsive Design**: Works seamlessly on both desktop and mobile devices
- **Form Validation**: Comprehensive validation using react-hook-form
- **Search & Filter**: Advanced search and filtering capabilities

## Technology Stack

- **Frontend**: Next.js 14, React 18, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: MySQL
- **Form Handling**: react-hook-form
- **File Upload**: Multer
- **Styling**: Tailwind CSS

## Database Schema

The system uses a MySQL database with the following table structure:

```sql
CREATE TABLE schools (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name TEXT NOT NULL,
  address TEXT NOT NULL,
  city TEXT NOT NULL,
  state TEXT NOT NULL,
  contact VARCHAR(15) NOT NULL,
  image TEXT,
  email_id VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## Prerequisites

Before running this project, make sure you have:

- Node.js 18+ installed
- MySQL server running
- npm or yarn package manager

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd school-management-system
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory with the following variables:
   ```env
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=your_mysql_password
   DB_NAME=schools_db
   DB_PORT=3306
   ```

4. **Set up the database**
   ```bash
   node lib/setup-db.js
   ```
   This will create the database and tables automatically.

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
├── pages/                 # Next.js pages
│   ├── index.jsx         # Home page
│   ├── addSchool.jsx     # Add school form
│   ├── showSchools.jsx   # Display schools
│   └── api/              # API routes
│       ├── schools.js    # GET all schools
│       └── schools/      # School operations
│           └── add.js    # Add new school
├── lib/                  # Database utilities
│   ├── db.js            # Database connection
│   └── setup-db.js      # Database setup script
├── styles/               # Global styles
│   └── globals.css      # Tailwind CSS imports
├── public/               # Static files
│   └── schoolImages/    # Uploaded school images
└── package.json          # Dependencies and scripts
```

## Usage

### Adding a School

1. Navigate to the "Add School" page
2. Fill in all required fields:
   - School Name
   - Address
   - City
   - State
   - Contact Number
   - Email Address
3. Optionally upload a school image
4. Submit the form

### Viewing Schools

1. Navigate to the "View Schools" page
2. Use the search bar to find specific schools
3. Filter by city or state using the dropdown menus
4. Schools are displayed in a responsive grid layout

## API Endpoints

- `GET /api/schools` - Retrieve all schools
- `POST /api/schools/add` - Add a new school (with image upload)

## Form Validation

The add school form includes comprehensive validation:

- **Required Fields**: All fields are mandatory
- **Email Validation**: Ensures proper email format
- **Contact Validation**: Accepts 10-15 digit numbers
- **Image Validation**: Only image files up to 5MB

## Responsive Design

The application is fully responsive and includes:

- Mobile-first design approach
- Responsive grid layouts
- Touch-friendly interface elements
- Optimized for all screen sizes

## File Upload

School images are:
- Stored in the `public/schoolImages/` directory
- Automatically renamed with unique identifiers
- Limited to 5MB file size
- Restricted to image file types only

## Development

To run the project in development mode:

```bash
npm run dev
```

To build for production:

```bash
npm run build
npm start
```

## Troubleshooting

### Database Connection Issues
- Ensure MySQL server is running
- Verify database credentials in `.env.local`
- Check if the database and tables exist

### Image Upload Issues
- Ensure the `public/schoolImages/` directory exists
- Check file size (max 5MB)
- Verify file type is an image

### Port Conflicts
- Change the port in `package.json` scripts if 3000 is occupied
- Update environment variables accordingly

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For support or questions, please open an issue in the repository or contact the development team.
