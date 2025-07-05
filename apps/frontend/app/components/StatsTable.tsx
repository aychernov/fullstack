import { countryCodeToFlagEmoji } from "../utils/countryCodeFlag";
import { Stats } from "@repo/types";

export function StatsTable({ stats }: { stats: Stats }) {
  return (
    <table
      border={1}
      cellPadding={5}
      style={{ borderCollapse: "collapse", width: "100%" }}
    >
      <thead>
        <tr>
          <th>Country</th>
          <th>Count</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(stats).map(([code, count]) => (
          <tr key={code}>
            <td>
              {countryCodeToFlagEmoji(code)} {code.toUpperCase()}
            </td>
            <td>{count}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
