

const MyUpcomingAppointment = () => {
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Appointment key Details</th>
                            <th>Test Name</th>
                            <th>Appointment Date</th>
                            <th>Time</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Hart Hagerty</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Zemlak, Daniel and Leannon
                            </td>
                            <td>8 November</td>
                            <th>
                                5:23pm
                            </th>
                            <th>
                                <button className="btn btn-ghost bg-cyan-300 btn-xl">Cancel</button>
                            </th>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyUpcomingAppointment;