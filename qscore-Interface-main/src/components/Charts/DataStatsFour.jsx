import React from "react";

const DataStatsFour = () => {
  return (
    <div>
      <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center">
          <div className="relative z-20 inline-block">
            <select
              name="#"
              id="#"
              className="relative z-20 inline-flex appearance-none bg-transparent py-1 pl-3 pr-8 font-medium outline-none"
            ></select>
            <span className="absolute right-1 top-1/2 z-10 -translate-y-1/2"></span>
          </div>
        </div>
      </div>

      <div className="2xl:gap-7.5 grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 xl:grid-cols-3">
        <div className="xl:p-7.5 rounded-sm border border-stroke bg-white p-4 shadow-default dark:border-strokedark dark:bg-boxdark md:p-6">
          <div className="flex items-end justify-between">
            <div>
              <h3 className="mb-4 text-title-lg font-bold text-black dark:text-white">
                110
              </h3>
              <div className="flex items-end">
                <p className="font-medium">Todays Appointments</p>
              </div>
            </div>

            <div>
              <svg
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30.3333 15.332V5.33203C30.3333 3.4937 28.8383 1.9987 27 1.9987H22C22 1.55667 21.8244 1.13275 21.5118 0.820187C21.1993 0.507626 20.7753 0.332031 20.3333 0.332031H10.3333C9.89129 0.332031 9.46736 0.507626 9.1548 0.820187C8.84224 1.13275 8.66665 1.55667 8.66665 1.9987H3.66665C1.82831 1.9987 0.333313 3.4937 0.333313 5.33203V26.9987C0.333313 28.837 1.82831 30.332 3.66665 30.332H15.3333C15.3333 32.1704 16.8283 33.6654 18.6666 33.6654H30.3333C32.1716 33.6654 33.6666 32.1704 33.6666 30.332V18.6654C33.6666 16.827 32.1716 15.332 30.3333 15.332ZM15.3333 18.6654V26.9987H3.66665V5.33203H8.66665V8.66536H22V5.33203H27V15.332H18.6666C16.8283 15.332 15.3333 16.827 15.3333 18.6654ZM18.6666 30.332V18.6654H30.3333L30.335 30.332H18.6666Z"
                  fill="#545454"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="xl:p-7.5 rounded-sm border border-stroke bg-white p-4 shadow-default dark:border-strokedark dark:bg-boxdark md:p-6">
          <div className="flex items-end justify-between">
            <div>
              <h3 className="mb-4 text-title-lg font-bold text-black dark:text-white">
                88
              </h3>
              <div className="flex items-end">
                <p className="font-medium">Total Staff</p>
              </div>
            </div>

            <div>
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.6734 18.4146C28.6885 16.6847 29.1268 14.6768 28.9251 12.6812C28.6267 9.70792 26.9667 7.07958 24.2534 5.28125L22.4117 8.05792C24.2767 9.29458 25.4117 11.0563 25.6084 13.0146C25.6991 13.9247 25.5858 14.8437 25.2767 15.7046C24.9676 16.5654 24.4706 17.3466 23.8217 17.9912L21.8351 19.9779L24.5317 20.7696C31.5851 22.8362 31.6667 29.9296 31.6667 30.0012H35.0001C35.0001 27.0196 33.4067 21.1929 27.6734 18.4146Z"
                  fill="#545454"
                />
                <path
                  d="M15.8334 20.0013C19.51 20.0013 22.5 17.0113 22.5 13.3346C22.5 9.65797 19.51 6.66797 15.8334 6.66797C12.1567 6.66797 9.16671 9.65797 9.16671 13.3346C9.16671 17.0113 12.1567 20.0013 15.8334 20.0013ZM15.8334 10.0013C17.6717 10.0013 19.1667 11.4963 19.1667 13.3346C19.1667 15.173 17.6717 16.668 15.8334 16.668C13.995 16.668 12.5 15.173 12.5 13.3346C12.5 11.4963 13.995 10.0013 15.8334 10.0013ZM18.3334 21.668H13.3334C7.81837 21.668 3.33337 26.153 3.33337 31.668V33.3346H6.66671V31.668C6.66671 27.9913 9.65671 25.0013 13.3334 25.0013H18.3334C22.01 25.0013 25 27.9913 25 31.668V33.3346H28.3334V31.668C28.3334 26.153 23.8484 21.668 18.3334 21.668Z"
                  fill="#545454"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="xl:p-7.5 rounded-sm border border-stroke bg-white p-4 shadow-default dark:border-strokedark dark:bg-boxdark md:p-6">
          <div className="flex items-end justify-between">
            <div>
              <h3 className="mb-4 text-title-lg font-bold text-black dark:text-white">
                40
              </h3>
              <div className="flex items-end">
                <p className="font-medium">Inspection Devices</p>
              </div>
            </div>

            <div>
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M33.3334 5H11.6667C9.82837 5 8.33337 6.495 8.33337 8.33333V11.6667H6.66671C4.82837 11.6667 3.33337 13.1617 3.33337 15V31.6667C3.33337 33.505 4.82837 35 6.66671 35H16.6667C18.505 35 20 33.505 20 31.6667H33.3334C35.1717 31.6667 36.6667 30.1717 36.6667 28.3333V8.33333C36.6667 6.495 35.1717 5 33.3334 5ZM16.6617 31.6667H6.66671V15H16.6667L16.6617 31.6667ZM33.3284 28.3333H20V15C20 13.1617 18.505 11.6667 16.6667 11.6667H11.6667V8.33333H33.3334L33.3284 28.3333Z"
                  fill="#545454"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataStatsFour;
