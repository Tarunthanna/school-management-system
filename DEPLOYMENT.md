# 🚀 Deployment Guide - School Management System

## **Option 1: Deploy to Vercel (Recommended for Next.js)**

### **Prerequisites:**
- GitHub account
- Vercel account (free at [vercel.com](https://vercel.com))

### **Step 1: Push to GitHub**
```bash
# Initialize git repository
git init
git add .
git commit -m "Initial commit: School Management System"

# Create a new repository on GitHub and push
git remote add origin https://github.com/yourusername/school-management-system.git
git branch -M main
git push -u origin main
```

### **Step 2: Deploy to Vercel**
1. **Go to** [vercel.com](https://vercel.com) and sign in
2. **Click** "New Project"
3. **Import** your GitHub repository
4. **Configure** environment variables (see below)
5. **Deploy** with one click!

### **Environment Variables for Vercel:**
```
DB_HOST=your-database-host
DB_USER=your-database-user
DB_PASSWORD=your-database-password
DB_NAME=your-database-name
DB_PORT=3306
NODE_ENV=production
```

## **Option 2: Deploy to Netlify**

### **Step 1: Build the Project**
```bash
npm run build
```

### **Step 2: Deploy to Netlify**
1. **Go to** [netlify.com](https://netlify.com)
2. **Drag and drop** the `.next` folder
3. **Configure** environment variables
4. **Deploy** automatically

## **Option 3: Deploy to Railway**

### **Step 1: Setup Railway**
1. **Go to** [railway.app](https://railway.app)
2. **Connect** your GitHub repository
3. **Add** MySQL database service
4. **Configure** environment variables
5. **Deploy** automatically

## **Database Options for Production:**

### **1. PlanetScale (Recommended)**
- **Free tier** available
- **MySQL compatible**
- **Automatic scaling**
- **Git-based deployments**

### **2. Railway MySQL**
- **Easy setup**
- **Automatic backups**
- **Good for small projects**

### **3. AWS RDS**
- **Professional grade**
- **Highly scalable**
- **More complex setup**

### **4. DigitalOcean Managed MySQL**
- **Affordable**
- **Good performance**
- **Easy management**

## **Environment Variables Setup:**

### **For Vercel:**
1. **Go to** your project dashboard
2. **Click** "Settings" → "Environment Variables"
3. **Add** each variable:
   - `DB_HOST`
   - `DB_USER`
   - `DB_PASSWORD`
   - `DB_NAME`
   - `DB_PORT`
   - `NODE_ENV`

### **For Local Development:**
Create `.env.local` file:
```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=Sslr@456
DB_NAME=schools_db
DB_PORT=3306
NODE_ENV=development
```

## **Post-Deployment Steps:**

### **1. Test the Application**
- **Verify** all pages load correctly
- **Test** form submission
- **Check** image upload functionality
- **Verify** database connections

### **2. Monitor Performance**
- **Check** Vercel analytics
- **Monitor** database performance
- **Test** on different devices

### **3. Set Up Custom Domain (Optional)**
- **Add** custom domain in Vercel
- **Configure** DNS settings
- **Enable** HTTPS automatically

## **Troubleshooting:**

### **Common Issues:**
1. **Database Connection Failed**
   - Check environment variables
   - Verify database is accessible
   - Check firewall settings

2. **Build Errors**
   - Check Node.js version
   - Verify all dependencies
   - Check for TypeScript errors

3. **Image Upload Issues**
   - Verify file permissions
   - Check storage limits
   - Test with smaller files

## **Support:**
- **Vercel Docs:** [vercel.com/docs](https://vercel.com/docs)
- **Next.js Docs:** [nextjs.org/docs](https://nextjs.org/docs)
- **GitHub Issues:** Create issue in your repository

---

**Happy Deploying! 🎉**
