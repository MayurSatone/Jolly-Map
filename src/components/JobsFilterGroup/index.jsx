import ProfileDetails from '../ProfileDetails';

const JobsFilterGroup = (props) => {
  const {
    employmentTypesList,
    salaryRangesList,
    changeEmploymentType,
    changeSalaryRange,
  } = props;

  const getEmploymentTypeList = () => {
    return employmentTypesList.map((employ) => {
      const onChangeEmployType = (event) => {
        const isChecked = event.target.checked;
        const value = event.target.value;
        
        // For internships, we'll handle salary differently
        if (value === 'INTERNSHIP') {
          // You might want to add special logic here if needed
        }
        
        changeEmploymentType(value, isChecked);
      };

      return (
        <li
          className="flex items-center pb-5"
          key={employ.employmentTypeId}
        >
          <input
            type="checkbox"
            className="h-4 w-4 text-indigo-600 rounded focus:ring-indigo-500"
            id={employ.employmentTypeId}
            value={employ.employmentTypeId}
            onChange={onChangeEmployType}
          />
          <label
            htmlFor={employ.employmentTypeId}
            className="text-white ml-2 text-sm"
          >
            {employ.label}
          </label>
        </li>
      );
    });
  };

  const getSalaryRangeList = () => {
    return salaryRangesList.map((salary) => {
      const onChangeSalary = () => {
        // Get current employment types from props or state if available
        const { employmentType = [] } = props;
        
        // If internship is selected, divide salary by 3
        const isInternshipSelected = employmentType.includes('INTERNSHIP');
        const adjustedSalary = isInternshipSelected 
          ? (parseInt(salary.salaryRangeId, 10) / 3).toString() 
          : salary.salaryRangeId;
        
        changeSalaryRange(adjustedSalary);
      };

      return (
        <li
          className="flex items-center pb-5"
          key={salary.salaryRangeId}
        >
          <input
            type="radio"
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
            id={salary.salaryRangeId}
            name="salary"
            onChange={onChangeSalary}
          />
          <label
            htmlFor={salary.salaryRangeId}
            className="text-white ml-2 text-sm"
          >
            {salary.label}
          </label>
        </li>
      );
    });
  };

  const renderEmploymentType = () => (
    <div className="flex flex-col">
      <h1 className="text-white font-roboto font-semibold text-lg mb-4 mt-7">
        Type of Employment
      </h1>
      <ul className="list-none p-0 m-0">{getEmploymentTypeList()}</ul>
    </div>
  );

  const renderSalaryRange = () => (
    <div className="flex flex-col">
      <h1 className="text-white font-roboto font-semibold text-lg mb-4 mt-7">
        Salary Range
      </h1>
      <ul className="list-none p-0 m-0">{getSalaryRangeList()}</ul>
    </div>
  );

  return (
    <div className="flex flex-col justify-center ml-4">
      <ProfileDetails />
      <hr className="w-full border border-gray-500 my-4" />
      {renderEmploymentType()}
      <hr className="w-full border border-gray-500 my-4" />
      {renderSalaryRange()}
    </div>
  );
};

export default JobsFilterGroup;