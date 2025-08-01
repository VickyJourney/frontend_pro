import {
  Box,
  Divider,
  List,
  ListItem,
  Paper,
  Typography,
  Chip,
} from "@mui/material";

const SideInfo = () => (
  <Box sx={{ pl: "0", mt: "300px", textAlign: "center" }}>
    <Paper
      elevation={3}
      sx={{ p: 2, mb: 3, borderRadius: 2, backgroundColor: "#eef6f8" }}
    >
      <Typography sx={{ fontWeight: "700" }}>Languages</Typography>
      <Divider sx={{ borderBottomWidth: "2px", mt: "4px", mb: "6px" }} />
      <List>
        {[
          "English C1",
          "Ukrainian C2",
          "Polish C2",
          "Russian C2",
          "Spanish B1",
        ].map((lang, idx) => (
          <ListItem
            key={idx}
            sx={{ p: 0, fontSize: 14, justifyContent: "center" }}
          >
            {lang}
          </ListItem>
        ))}
      </List>
    </Paper>
    <Paper
      elevation={3}
      sx={{ p: 2, mb: 3, borderRadius: 2, backgroundColor: "#eef6f8" }}
    >
      <Typography sx={{ fontWeight: "700" }}>
        International internships
      </Typography>
      <Divider sx={{ borderBottomWidth: "2px", mt: "4px", mb: "6px" }} />
      <List>
        {" "}
        {["USA 2018", "USA 2017", "Spain 2016", "Greece 2015"].map(
          (place, idx) => (
            <ListItem
              key={idx}
              sx={{ p: 0, fontSize: 14, justifyContent: "center" }}
            >
              {place}
            </ListItem>
          )
        )}
      </List>
    </Paper>
    <Paper
      elevation={3}
      sx={{ p: 2, mb: 3, borderRadius: 2, backgroundColor: "#eef6f8" }}
    >
      <Typography sx={{ fontWeight: "700" }}>References</Typography>
      <Divider sx={{ borderBottomWidth: "2px", mt: "3px", mb: "6px" }} />
      <List>
        {[
          {
            name: "Olga Maslova",
            title: "Front-end developer Hyperion Tech / Coach Hillel IT School",
            phone: "+380661445338",
            email: "olga.alevel@gmail.com",
          },
          {
            name: "Dorota Ryglewicz",
            title: "Sales Director PURO Hotels",
            phone: "+48724455557",
            email: "dorota.ryglewicz@purohotel.pl",
          },
        ].map((ref, idx) => (
          <ListItem
            key={idx}
            sx={{
              p: 0,
              mb: 4,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography sx={{ fontSize: 14, fontWeight: 700 }}>
              {ref.name}
            </Typography>
            <Typography sx={{ fontSize: 12, textAlign: "center", mb: 1 }}>
              {ref.title}
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Chip
                label="Phone"
                component="a"
                href={`tel:${ref.phone}`}
                clickable
                size="small"
                variant="outlined"
              />
              <Chip
                label="Email"
                component="a"
                href={`mailto:${ref.email}`}
                clickable
                size="small"
                variant="outlined"
              >
                E-mail
              </Chip>
            </Box>
          </ListItem>
        ))}
      </List>
    </Paper>
  </Box>
);

export default SideInfo;
