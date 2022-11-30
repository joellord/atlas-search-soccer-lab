import gql from "graphql-tag";

export const FIND_PLAYERS = gql`
  query searchPlayers($SearchQueryInput: SearchQueryInput) {
    searchPlayers(input: $SearchQueryInput) {
      _id
      short_name
      long_name
      overall
      club_logo_url
      club_name
      club_jersey_number
      player_face_url
      nation_flag_url
      nation_jersey_number
      player_positions
    }
  }
`;
