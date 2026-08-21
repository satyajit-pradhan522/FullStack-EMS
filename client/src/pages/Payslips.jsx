import React, { useCallback, useEffect, useState } from 'react'
import { dummyPayslipData } from '../assets/assets'
import Loading from '../components/Loading'
import PayslipList from '../components/payslip/PayslipList'
import GeneratePayslipForm from '../components/payslip/GeneratePayslipForm'

const Payslips = () => {
  const [payslips, setPayslips] = useState([])
  const [employee, setEmployee] = useState([])
  const [loading, setLoading] = useState(true)
  const isAdmin = true // Replace with actual logic to determine if the user is an admin

  const fetchPayslips = useCallback(async () => {
    setPayslips(dummyPayslipData)
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  }, [])

  useEffect(() => {
    fetchPayslips()
  }, [fetchPayslips])

  useEffect(() => {
    if (isAdmin) {
      setEmployee(dummyPayslipData)
    }
  }, [isAdmin])

  if (loading) return <Loading />

  return (
    <div className='animate-fade-in'>
      <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8'>
        <div>
          <h1 className='page-title'>Payslips</h1>
          <p className='page-subtitle'>{isAdmin ? "Generate and manage employee payslips" : "Your payslip history"}</p>
        </div>
        {isAdmin && <GeneratePayslipForm employees={employee} onSuccess={fetchPayslips} />}
      </div>
      <PayslipList payslips={payslips} isAdmin={isAdmin} />
    </div>
  )
}

export default Payslips
