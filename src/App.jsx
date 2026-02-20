import './App.css'
import Home from './components/Home'
import Account from './components/Account'
import Admin from './components/Admin'
import Attendence from './teacher/Attendence'
import Notice from './teacher/Notice'
import Profile from './teacher/Profile'
import Fee from './teacher/Fee'
import Homework from './teacher/Homework'
import Myclass from './teacher/My class'
import Dashboard from './teacher/TeacherDashboard'
import AdminDashboard from './admin/AdminDashboard'
import TeacherDashboard from './teacher/TeacherDashboard'
import Classes from './admin/Classes'
import FeeManagement from './admin/FeeManagement'
import Reports from './admin/Reports'
import Students from './admin/Students'
import Teacher from './admin/Teacher' 
import Notices from './admin/Notices'
import Adminid from './admin/Adminid'
import TeacherLayout from './teacher/TeacherLayout'
import AdminLayout from './admin/AdminLayout'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      {/* <Home />
      <Account />
      <Admin /> 
      <TeacherDashboard />
      <Myclass />
      <Attendence />
      <Homework />
      <Fee/>
      <Notice />
      <Profile />
      <AdminDashboard />
      <Students />
      <Teacher/>
      <Classes />
      <FeeManagement />
      <Notices />
      <Reports />
      <Adminid /> */}
      
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/account" element={<Account />} />
    <Route path="/admin" element={<Admin />} />


    <Route path="/out" element={<TeacherLayout />}>
  <Route path="dashboard" element={<TeacherDashboard />} />
  <Route path="class" element={<Myclass />} />
  <Route path="attend" element={<Attendence />} />
  <Route path="work" element={<Homework />} />
  <Route path="fee" element={<Fee />} />
  <Route path="notice" element={<Notice />} />
  <Route path="profile" element={<Profile />} />
</Route>


    <Route path="/lay" element={<AdminLayout />}>
      <Route path="dash" element={<AdminDashboard />} />
      <Route path="students" element={<Students />} />
      <Route path="teachers" element={<Teacher />} />
      <Route path="classes" element={<Classes />} />
      <Route path="fee" element={<FeeManagement />} />
      <Route path="notices" element={<Notices />} />
      <Route path="reports" element={<Reports />} />
      <Route path="id" element={<Adminid />} />
    </Route>
  </Routes>
</BrowserRouter>


      </>
  )
}
export default App
