
import TicketsItemList from "../../companents/TicketsItem/TicketsListItem";

import "./main.scss";

import avatarBrat from '../../Assets/images/client1.png';

const TicketsItem = () => {

  const clientsArr = [
    {
      imgLink: "",
      clientTitle: "Contact Email not Linked",
      clientStatus: "Updated 1 day ago",
      clientName: "Tom Cruise",
      clientDate: "on 24.05.2019",
      clientDay: "May 26, 2019",
      clientTime: "6:30 PM",
      priority: "High"
    },
    {
      imgLink: "",
      clientTitle: "Contact Email not Linked",
      clientStatus: "Updated 1 day ago",
      clientName: "Tom Cruise",
      clientDate: "on 24.05.2019",
      clientDay: "May 26, 2019",
      clientTime: "6:30 PM",
      priority: "High"
    },
    {
      imgLink: "",
      clientTitle: "Contact Email not Linked",
      clientStatus: "Updated 1 day ago",
      clientName: "Tom Cruise",
      clientDate: "on 24.05.2019",
      clientDay: "May 26, 2019",
      clientTime: "6:30 PM",
      priority: "High"
    },
    {
      imgLink: "",
      clientTitle: "Contact Email not Linked",
      clientStatus: "Updated 1 day ago",
      clientName: "Tom Cruise",
      clientDate: "on 24.05.2019",
      clientDay: "May 26, 2019",
      clientTime: "6:30 PM",
      priority: "High"
    },
    {
      imgLink: "",
      clientTitle: "Contact Email not Linked",
      clientStatus: "Updated 1 day ago",
      clientName: "Tom Cruise",
      clientDate: "on 24.05.2019",
      clientDay: "May 26, 2019",
      clientTime: "6:30 PM",
      priority: "High"
    },
    {
      imgLink: "",
      clientTitle: "Contact Email not Linked",
      clientStatus: "Updated 1 day ago",
      clientName: "Tom Cruise",
      clientDate: "on 24.05.2019",
      clientDay: "May 26, 2019",
      clientTime: "6:30 PM",
      priority: "High"
    },
    {
      imgLink: "",
      clientTitle: "Contact Email not Linked",
      clientStatus: "Updated 1 day ago",
      clientName: "Tom Cruise",
      clientDate: "on 24.05.2019",
      clientDay: "May 26, 2019",
      clientTime: "6:30 PM",
      priority: "High"
    },
    {
      imgLink: "",
      clientTitle: "Contact Email not Linked",
      clientStatus: "Updated 1 day ago",
      clientName: "Tom Cruise",
      clientDate: "on 24.05.2019",
      clientDay: "May 26, 2019",
      clientTime: "6:30 PM",
      priority: "High"
    }
  ]

  return(
    <div className="tickets-item">
      {
          clientsArr.map(item => (
            <TicketsItemList
            avatar={avatarBrat}
              clientTitle={item.clientTitle}
              clientStatus={item.clientStatus}
              clientName={item.clientName}
              clientDate={item.clientDate}
              clientDay={item.clientDay}
              clientTime={item.clientTime}
              priority={item.priority}
            />
          ))
      }
    </div>
  )
};

export default TicketsItem;
