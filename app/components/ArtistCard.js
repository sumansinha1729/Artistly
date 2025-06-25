"use client";
import { Card, CardContent, Typography, Box, Button } from "@mui/material";
import { motion } from "framer-motion";

export default function ArtistCard({ artist }) {
  return (
    <motion.div whileHover={{ scale: 1.03 }}>
      <Card elevation={3} className="w-full">
        <CardContent>
          <Typography variant="h6" gutterBottom>
            {artist.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Category: {artist.category}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Location: {artist.location}
          </Typography>
          <Typography variant="body2" color="text.primary" fontWeight={600}>
            Price: {artist.price}
          </Typography>
          <Button
            variant="contained"
            sx={{
              mt: 2,
              backgroundColor: "black",
              color: "white",
              textTransform: "none",
              fontWeight: 600,
              borderRadius: "12px",
              px: 3,
              py: 1.2,
              "&:hover": {
                backgroundColor: "#333",
              },
            }}
          >
            Ask for Quote
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
