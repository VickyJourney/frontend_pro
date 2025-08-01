import {
  Container,
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Typography,
  Divider,
} from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useState } from "react";

const workData = [
  {
    title: "Sales Manager",
    company: "PURO Hotels (Warsaw)",
    years: "2023–2024",
    responsibilities: [
      "Created strategic sales plans designed to increase sales, customer loyalty and market awareness.",
      "Utilized CRM and data analysis to optimize client engagement, enhancing digital customer experiences.",
      "Negotiated rates with corporate clients and agencies, securing contracts and fostering long-term business relationships.",
      "Monitored competitor activity, adapting strategies to maintain competitive advantage and market leadership.",
      "Managed relationship with clients, completing regular visits and providing loyalty discounts.",
      "Planned and executed promotional in store events to increase business and sales revenues.",
      "Negotiated and finalized client contracts, ensuring beneficial agreements and policy compliance.",
      "Developed and implemented innovative sales strategies, increasing market share and profitability.",
    ],
  },
  {
    title: "Meeting & Event Coordinator",
    company: "PURO Hotels (Warsaw)",
    years: "2021–2023",
    responsibilities: [
      "Coordinated logistics for over 300 corporate events, meetings and conferences, managing arrangements efficiently.",
      "Led cross-functional teams, fostering collaboration between departments, to meet tight deadlines and objectives.",
      "Managed budget allocation and tracking, ensuring financial transparency during event planning.",
      "Handled last-minute changes/challenges calmly and efficiently, ensuring minimal disruption to event proceedings.",
      "Analyzed post-event feedback, identifying areas for improvement, to elevate future event quality and satisfaction.",
      "Prepared detailed reports on event outcomes, highlighting successes and learning points for stakeholder review.",
    ],
  },
  {
    title: "Front Desk & Reservation Agent",
    company: "PURO Hotels (Krakow)",
    years: "2019–2021",
    responsibilities: [
      "Coordinated with event planners and clients to manage group bookings and special event accommodations.",
      "Prepared detailed reports on reservation trends, occupancy rates, and revenue figures for management review.",
      "Facilitated swift check-in and check-out processes, ensuring guest satisfaction and encouraging return visits.",
      "Handled booking reservations via phone, email, and in-person with high accuracy and attention to detail.",
      "Responded to guest complaints with empathy, offering practical solutions to enhance their stay.",
      "Processed payments for accommodations, services, and resolved billing discrepancies with tact.",
    ],
  },
];

const WorkExperience = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <Container sx={{ p: "0", mb: 3 }}>
      <Box sx={{ display: "Flex", alignItems: "center" }}>
        <ListItemIcon sx={{ minWidth: "40px" }}>
          <WorkIcon />
        </ListItemIcon>
        <Typography
          component="h3"
          variant="h6"
          sx={{ fontWeight: "700", mb: "1", textTransform: "uppercase" }}
        >
          Work experience
        </Typography>
      </Box>
      <Divider sx={{ mt: 1, mb: 2 }} />
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        {workData.map((job, index) => (
          <div key={index}>
            <ListItemButton onClick={() => handleClick(index)}>
              <ListItemText
                primary={`${job.title} – ${job.company}`}
                secondary={job.years}
              />
              {openIndex === index ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openIndex === index} timeout="auto" unmountOnExit>
              <List component="div" disablePadding sx={{ pl: 4 }}>
                {job.responsibilities.map((item, i) => (
                  <Typography key={i} variant="body2" sx={{ py: 0.5 }}>
                    • {item}
                  </Typography>
                ))}
              </List>
            </Collapse>
          </div>
        ))}
      </List>
    </Container>
  );
};

export default WorkExperience;
